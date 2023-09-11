<template>
  <div
    class="bg-gray-100 h-full flex justify-center items-center"
    v-if="folders.length === 0 || selectedFolderIndex === null"
  >
    <div class="text-center">
      <div>
        <svg
          width="248"
          height="240"
          viewBox="0 0 248 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_9_12)">
            <path
              d="M86.7704 76.1656C81.8218 73.6562 77.4705 71.197 73.5307 68.1004C69.591 65.0038 66.3036 61.4304 64.9737 56.3915C64.276 53.7365 64.6675 51.3777 66.66 49.4906C68.8733 47.4028 71.5433 47.0063 74.3388 48.1305C75.5634 48.6223 76.798 49.2698 77.7917 50.123C86.128 57.2848 95.9548 61.9523 105.621 66.9059C109.932 69.1142 114.294 71.2522 118.459 73.7114C127.348 78.9661 130.108 85.3049 128.161 95.4329C126.841 102.289 125.4 109.124 124.13 115.99C123.784 117.862 123.849 119.814 123.749 121.732C123.734 122.058 123.689 122.575 123.859 122.685C127.443 124.964 125.772 128.883 126.76 131.96C127.031 132.813 126.961 133.782 126.981 134.7C127.026 136.552 127.368 137.747 129.646 138.394C132.758 139.277 133.872 142.409 135.202 145.134C135.905 146.58 135.854 148.356 137.154 149.526C138.193 148.341 139.227 147.157 140.271 145.977C149.034 136.095 157.265 125.711 166.68 116.442C170.073 113.099 171.669 109.114 173.4 105.059C177.902 94.5044 183.252 84.4065 189.405 74.7353C190.248 73.4103 189.842 72.9335 188.773 72.261C183.252 68.803 177.747 65.3149 172.261 61.8018C171.312 61.1945 169.977 60.7328 170.108 59.2924C170.248 57.7164 171.764 57.591 172.873 57.1242C183.99 52.4517 195.488 49.1594 207.704 47.6085C207.056 46.3789 206.474 45.3099 205.932 44.2208C205.581 43.5182 205.435 42.7453 206.013 42.1079C206.63 41.4254 207.393 41.6261 208.065 42.0627C210.811 43.8394 213.897 43.8796 217.004 43.8294C219.764 43.7842 222.504 43.7942 225.174 44.6976C228.602 45.862 230.891 48.0703 231.664 51.6537C231.809 52.3363 231.849 52.9285 232.512 53.33C239.448 57.5307 240.105 64.1857 239.508 71.3225C239.488 71.5734 239.428 71.8193 239.413 72.0703C239.272 74.1681 237.907 76.2961 238.228 78.1029C238.54 79.8394 241.476 79.8294 242.991 81.1142C248.05 85.3852 247.077 93.3601 241.009 96.3965C236.467 98.67 231.629 98.4392 226.78 97.8218C224.768 97.5659 220.838 100.136 220.241 102.083C217.25 111.769 215.819 121.757 214.796 131.789C214.434 135.302 215.036 138.931 215.317 142.494C215.448 144.125 216.798 145.054 217.932 146.033C223.262 150.62 228.517 155.237 232.452 161.194C240.402 173.225 245.225 186.404 247.348 200.617C247.458 201.355 247.674 202.078 247.764 202.816C247.915 204.01 248.025 205.365 246.439 205.576C245.014 205.767 244.708 204.507 244.497 203.428C243.92 200.497 243.423 197.551 242.831 194.625C240.301 182.088 235.252 170.66 227.759 160.291C224.532 155.824 220.336 152.346 216.141 148.918C212.858 146.233 211.333 143.006 211.734 138.876C211.925 136.928 211.207 136.547 209.36 136.552C194.213 136.587 181.767 130.264 171.167 119.89C169.726 118.479 169.034 118.399 167.714 119.854C158.133 130.464 148.743 141.24 139.458 152.11C138.324 153.44 138.193 154.6 138.73 156.196C142.168 166.384 147.187 175.804 152.602 185.034C157.3 193.044 162.048 201.034 168.552 207.759C174.374 213.782 180.868 218.635 189.812 218.54C192.467 218.509 195.107 218.319 197.27 216.512C197.089 215.799 196.592 216 196.226 215.915C193.847 215.353 192.035 213.285 191.955 210.986C191.88 208.753 193.079 207.393 195.077 206.65C197.25 205.842 199.98 206.429 201.074 208.467C202.359 210.846 203.262 209.867 204.422 208.577C206.62 206.128 208.432 203.428 209.526 200.311C209.967 199.051 210.665 198.394 211.925 198.866C213.179 199.338 212.984 200.477 212.622 201.435C210.831 206.133 208.08 210.158 204.11 213.3C203.458 213.812 202.68 214.188 202.364 215.036C200.422 220.291 195.915 221.496 191.107 221.822C182.946 222.379 176.171 218.976 170.158 213.802C162.238 206.991 156.773 198.279 151.418 189.486C143.578 176.607 136.903 163.212 132.888 148.602C132.266 146.344 131.423 144.125 129.802 142.369C128.708 141.189 127.729 140.537 126.168 142.299C119.599 149.721 110.956 153.345 101.355 154.585C94.9962 155.403 91.9599 158.243 91.7993 164.893C91.6788 169.862 92.6926 174.519 95.995 178.439C96.8984 179.513 97.0238 180.567 95.9247 181.511C91.8545 185.009 91.8344 189.41 93.0238 194.108C94.8758 201.42 98.399 208.085 101.159 215.046C102.479 218.379 103.92 221.671 104.487 225.255C104.688 226.524 104.768 227.769 103.237 228.04C101.636 228.321 101.471 227.067 101.27 225.812C100.662 222.083 99.0464 218.67 97.6462 215.202C95.5533 210.023 93.335 204.893 91.2723 199.699C90.7905 198.484 90.3588 198.218 89.0891 198.66C87.1267 199.348 85.0489 199.619 82.9561 199.789C74.3036 200.502 67.99 196.622 63.197 189.792C58.1581 182.61 55.202 174.429 52.0903 166.324C49.5558 159.709 47.6085 152.868 44.5019 146.474C43.0364 143.463 41.3752 140.567 38.936 138.193C37.7215 137.014 36.3664 136.422 34.6499 136.602C27.4128 137.375 20.3463 138.775 13.591 141.626C9.20452 143.473 7.24718 146.469 7.31242 151.312C7.44291 160.893 10.0125 169.987 12.0753 179.222C15.8143 195.945 21.8519 211.905 27.478 228.01C28.5822 231.172 29.9774 234.223 32.276 236.738C33.1493 237.696 33.4454 238.67 32.4216 239.558C31.2974 240.532 30.4492 239.704 29.6964 238.831C27.7641 236.592 26.133 234.098 25.2246 231.327C21.0188 218.514 15.4178 206.173 12.261 192.999C9.91719 183.222 6.84567 173.616 5.1744 163.679C4.23588 158.093 3.23714 152.482 4.43162 146.785C4.83814 144.848 5.62108 143.092 7.17189 141.862C8.26098 140.994 8.35634 140.136 8.14555 138.826C7.20201 132.984 5.93225 127.137 5.68632 121.255C5.42535 114.956 4.35634 108.703 4.57215 102.389C4.8532 94.1932 2.62484 86.3639 1.1744 78.4191C0.0903387 72.4768 -0.72271 66.404 1.02886 60.5521C2.28858 56.3413 4.10038 52.3363 3.78419 47.8143C3.76412 47.4931 3.77917 47.0715 3.95985 46.8407C7.20201 42.7553 6.97114 37.1493 10.0125 32.9988C11.1368 31.468 10.8959 29.6462 11.3877 27.99C12.3915 24.5772 13.7566 21.3952 16.2058 18.7654C17.8118 17.0439 19.7139 15.8494 22.1631 16.1355C23.4981 16.2911 23.8795 15.5834 24.3011 14.5797C25.9072 10.8005 27.7992 7.18194 30.2936 3.89461C32.9235 0.436644 36.4969 -0.672516 40.527 0.371399C45.5307 1.66625 50.3739 3.54831 54.9109 6.07278C60.5772 9.21958 62.1732 12.8883 60.7328 19.2321C58.9912 26.9109 55.5433 34.0025 52.9937 41.4053C50.8507 47.6286 48.7077 53.852 46.5345 60.0653C46.1531 61.1594 46.128 61.9021 47.0665 62.9159C48.9887 64.9937 48.808 67.7691 48.4366 70.3137C46.8407 81.1594 44.0853 91.7039 39.2422 101.581C36.7378 106.695 35.2271 112.04 35.0163 117.646C34.921 120.176 36.0452 122.745 36.6223 125.3C36.6775 125.541 36.8231 125.772 36.8532 126.013C37.3802 130.203 38.1631 133.897 41.9975 136.928C45.9072 140.025 47.7541 145.034 49.5508 149.747C53.4906 160.11 56.7729 170.73 61.6763 180.713C63.8946 185.235 66.4592 189.536 70.4241 192.803C75.995 197.39 82.2384 197.079 88.6926 195.322C89.6361 195.067 89.8269 194.509 89.6512 193.631C88.7077 188.954 88.9235 184.472 92.1456 180.617C93.0439 179.543 92.1456 178.956 91.744 178.218C88.256 171.709 87.473 164.984 90.1631 157.998C90.7102 156.577 91.3977 155.147 92.6424 154.289C94.7202 152.858 94.941 150.956 94.921 148.657C94.8758 143.819 94.5797 138.876 95.453 134.173C96.0201 131.117 96.2259 128.276 95.8294 125.27C95.5082 122.836 93.8269 121.109 91.2673 120.803C91.0213 120.773 90.7654 120.783 90.5144 120.778C82.7654 120.487 80.2158 118.655 77.5558 111.468C77.2949 110.765 76.9034 110.208 76.3112 109.666C72.0803 105.802 70.7604 100.934 71.6738 95.3877C72.1205 92.6976 73.6462 90.8206 76.261 89.9473C76.9285 89.7215 77.6612 89.596 77.5558 88.7227C76.7729 82.0376 80.532 78.5144 86.7754 76.1556L86.7704 76.1656ZM175.659 59.5634C175.724 60.4417 176.346 60.4919 176.728 60.7378C181.927 64.0803 187.147 67.3877 192.356 70.7102C193.862 71.6688 194.675 72.6625 193.42 74.5646C185.405 86.7403 179.051 99.7691 173.445 113.21C172.371 115.784 172.778 117.305 174.715 119.016C181.772 125.25 189.701 129.812 198.881 132.125C202.289 132.984 205.711 133.591 209.24 133.43C210.63 133.37 211.212 132.828 211.383 131.338C212.723 119.493 214.896 107.809 218.324 96.3714C219.443 92.6324 219.563 92.5671 223.358 93.6161C228.417 95.0113 233.526 95.6738 238.63 93.862C241.109 92.9837 242.655 91.2572 242.836 88.5019C243.016 85.7265 241.802 83.7089 239.267 82.8005C234.103 80.9435 228.868 79.4178 223.814 83.2271C223.137 83.739 222.349 84.2058 221.601 83.3425C221.034 82.6951 220.999 81.9473 221.636 81.325C224.763 78.2635 224.974 74.3689 224.703 70.384C224.376 65.6161 224.11 60.8833 227.097 56.4969C225.556 56.2058 224.346 55.9799 223.137 55.7541C219.338 55.0414 215.684 53.867 212.482 51.6738C211.247 50.8306 210.118 50.6951 208.743 50.8507C197.31 52.1255 186.354 55.202 175.669 59.5684L175.659 59.5634ZM80.2961 100.05C84.3212 96.7227 88.01 93.7114 92.8833 92.7428C94.389 92.4417 95.7089 92.7277 96.8632 93.7014C97.4856 94.2233 97.7767 94.9461 97.335 95.719C96.8683 96.527 96.0552 97.0339 95.2422 96.4668C93.7867 95.458 92.4919 96.1004 91.2271 96.6525C87.6587 98.2033 84.6324 100.517 81.9222 103.317C79.6637 105.651 79.6888 108.246 80.7779 110.971C82.0176 114.083 83.6587 116.863 87.4128 117.455C88.9134 117.691 89.7014 117.45 89.0841 115.654C88.2309 113.179 89.0339 111.011 90.7905 109.255C91.5583 108.487 92.6575 107.423 93.8218 108.577C94.9009 109.641 94.2836 110.69 93.2848 111.553C91.7491 112.883 91.8394 114.469 92.6926 116.09C93.9724 118.529 95.8946 119.885 98.7754 119.538C99.6286 119.438 100.497 119.458 100.828 120.497C101.044 121.174 101.029 122.068 100.376 122.284C98.6148 122.866 99.0866 124.125 99.207 125.33C99.3827 127.072 99.6587 128.813 99.6788 130.555C99.6939 131.905 100.171 132.161 101.46 132.166C108.141 132.181 114.028 129.967 119.428 126.173C120.336 125.536 120.512 124.838 120.432 123.854C120.141 120.241 120.522 116.652 121.179 113.124C122.404 106.595 123.895 100.12 125.154 93.596C126.54 86.4291 124.261 81.1393 118.043 77.3752C114.193 75.0414 110.198 72.9335 106.183 70.8858C95.6186 65.5006 84.798 60.5621 75.719 52.6976C75.2221 52.266 74.5998 51.9749 74.0176 51.6437C72.3614 50.6951 70.7202 50.4592 69.1443 51.8093C67.6035 53.1343 67.8294 54.7955 68.4065 56.4216C69.4705 59.3977 71.3526 61.8319 73.7164 63.9047C78.4743 68.0753 83.9849 71.0414 89.6161 73.8269C90.9561 74.4893 92.1807 74.5445 93.6612 74.1732C97.6663 73.1594 101.721 72.7779 105.726 74.2986C106.745 74.6851 107.609 75.2673 107.222 76.5019C106.906 77.5057 106.138 77.8469 105.039 77.5006C97.3902 75.0715 90.6249 78.0477 84.0201 81.2497C81.0038 82.7152 80.1205 85.852 81.1895 88.7829C85.33 86.1029 89.5408 83.5584 94.3287 82.1983C95.9348 81.7415 97.5558 81.3451 99.2622 81.7767C100.326 82.0477 100.893 82.6249 100.728 83.729C100.572 84.7829 99.7792 84.9235 98.8708 84.9787C92.3162 85.3752 86.9812 88.5169 82.138 92.6223C79.9649 94.4693 79.739 97.0088 80.2961 100.055V100.05ZM37.9975 3.36764C36.0502 3.36262 34.5094 4.06525 33.3099 5.51067C31.9147 7.18696 30.7604 9.02385 29.7767 10.9711C24.4668 21.5006 20.3312 32.4868 16.8833 43.7541C13.2999 55.458 11.734 67.5132 10.5646 79.6336C10.143 84.0151 15.2371 88.8733 19.724 88.6424C20.4115 88.6073 20.7528 88.1556 21.1443 87.734C22.7654 86.0075 24.5972 84.4316 26.7403 83.5634C31.2572 81.7315 33.2949 78.2484 34.7704 73.8369C36.261 69.3852 37.7516 64.7277 42.138 61.9423C42.6048 61.6462 42.7503 60.793 42.9661 60.1706C45.1794 53.7917 47.3927 47.4178 49.5659 41.0289C52.0853 33.6161 55.5433 26.5345 57.3601 18.8808C58.0276 16.0703 58.6198 13.0941 55.99 10.9912C50.7202 6.78043 44.4015 4.91845 37.9975 3.36764ZM7.88959 104.045C8.14555 108.662 8.27604 112.833 8.90841 116.974C9.10916 118.284 9.62108 118.68 10.8758 118.499C17.1041 117.621 23.3626 117.711 29.6161 118.118C31.0615 118.213 31.4831 117.822 31.6437 116.437C32.2309 111.383 33.0991 106.389 35.4931 101.792C37.4605 98.0126 39.0816 94.0828 40.3312 90.0126C42.5596 82.7654 44.8683 75.5282 45.069 67.8545C45.0941 66.8356 45.4655 65.4003 44.1255 65.059C43.0866 64.793 42.404 65.9423 41.8469 66.7453C41.1343 67.7691 40.4517 68.8382 39.9699 69.9824C38.67 73.054 37.3601 76.1305 36.2961 79.2823C35.5333 81.5508 34.2735 83.0765 32.1455 84.266C27.5985 86.8206 22.6449 89.0289 20.808 94.6299C20.5571 95.3877 19.6738 95.6085 18.8708 95.3576C18.128 95.1267 17.7516 94.4743 17.9624 93.7817C18.5345 91.8946 17.4053 91.4781 15.9598 90.926C8.57716 88.1154 6.85571 85.5759 7.48306 77.6763C7.97491 71.453 8.52698 65.2246 9.81179 59.0866C9.99247 58.2183 10.8306 56.9235 9.32497 56.2509C7.85445 55.5935 6.73526 56.1857 5.84693 57.3752C5.13927 58.3187 4.68758 59.3777 4.35634 60.5169C2.55458 66.7353 3.36261 72.9335 4.68758 79.0565C6.50439 87.453 8.37139 95.8193 7.89962 104.04L7.88959 104.045ZM122.911 127.689C115.824 133.26 108.176 135.679 99.729 135.573C98.3739 135.558 98.2836 136.346 98.2786 137.35C98.2685 141.526 98.3036 145.706 98.1882 149.882C98.1481 151.388 98.665 151.774 100.07 151.599C107.955 150.595 114.976 147.553 121.285 142.755C123.297 141.225 124.361 139.408 123.92 136.738C123.458 133.952 123.282 131.122 122.911 127.689ZM21.4404 120.974C18.138 121.265 14.3137 121.591 10.4893 121.937C9.74153 122.003 8.92346 121.987 9.11418 123.182C9.88206 127.94 10.67 132.698 11.3375 137.466C11.5182 138.755 11.9247 138.715 12.9285 138.289C19.3626 135.563 26.1129 134.108 33.064 133.621C34.5295 133.521 34.7353 132.843 34.4944 131.679C33.9473 128.994 33.3501 126.319 32.8482 123.624C32.5922 122.238 31.744 121.646 30.4592 121.556C27.6286 121.355 24.798 121.184 21.4304 120.969L21.4404 120.974ZM6.86073 50.5496C6.79548 51.4931 6.68507 52.6625 8.62735 52.7378C10.1581 52.798 11.2572 53.0339 11.5634 50.9059C11.9247 48.3814 12.7478 45.9122 13.4806 43.453C13.872 42.143 13.4053 42.1882 12.4216 42.5044C9.0138 43.5935 6.93601 46.4442 6.86073 50.5496ZM22.0979 19.4228C20.5972 19.4831 19.6989 19.995 18.931 20.7478C16.9937 22.66 15.8043 25.0238 14.9762 27.5734C14.7503 28.276 13.872 29.5006 14.8657 29.7064C15.8645 29.9072 17.606 30.3789 18.2334 29.0088C19.6286 25.9674 20.7528 22.8005 22.0928 19.4279L22.0979 19.4228ZM76.9787 104.959C77.6763 101.079 75.4981 97.0991 78.0276 92.8131C73.7767 95.0615 73.5408 99.6888 76.9787 104.959ZM12.2811 39.1518C14.7403 39.0264 16.1305 37.3049 16.522 34.0979C16.5772 33.6311 16.5872 33.1393 16.0552 33.2296C14.0627 33.5659 12.5972 34.6901 11.6336 36.4668C11.4379 36.8281 11.2422 37.1945 11.0966 37.5809C10.6198 38.8407 10.8607 39.5282 12.2811 39.1518ZM199.217 211.674C198.775 210.831 198.379 209.807 197.099 209.691C196.206 209.611 195.272 209.847 195.287 210.866C195.302 212.105 196.286 212.718 197.45 212.793C198.143 212.838 198.981 212.828 199.222 211.669L199.217 211.674Z"
              fill="black"
            />
            <path
              d="M174.575 133.21C172.999 135.067 171.92 136.396 170.78 137.666C169.154 139.473 167.438 141.189 165.154 142.173C162.745 143.207 160.743 142.344 160.06 139.864C159.072 136.276 159.925 132.748 160.693 129.255C160.868 128.472 161.571 127.729 162.595 128.09C163.609 128.442 163.92 129.25 163.724 130.299C163.272 132.678 162.881 135.061 162.931 137.501C162.971 139.343 163.669 139.478 165.044 138.529C167.779 136.642 169.536 133.842 171.724 131.443C172.793 130.274 173.882 129.124 175.006 128.005C175.578 127.433 176.336 127.282 177.099 127.568C177.942 127.885 178.008 128.622 178.058 129.42C178.294 132.969 177.365 136.371 176.798 139.814C176.417 142.148 176.276 144.477 176.582 146.79C177.109 150.73 179.262 152.437 183.252 152.326C186.911 152.221 190.253 150.881 193.601 149.601C198.038 147.905 202.444 146.118 207.077 144.984C208.326 144.678 209.706 144.146 210.238 145.812C210.821 147.634 209.23 147.784 208.035 148.08C201.3 149.731 195.107 152.994 188.407 154.745C188.246 154.785 188.095 154.876 187.935 154.916C176.291 158.068 172.376 151.031 173.245 141.701C173.486 139.097 174.043 136.517 174.57 133.215L174.575 133.21Z"
              fill="black"
            />
            <path
              d="M205.355 83.9649C203.011 83.9398 201.199 83.739 199.669 82.5546C198.956 82.0025 198.454 81.3099 198.991 80.4166C199.528 79.5182 200.346 79.2221 201.325 79.7742C202.901 80.6675 204.562 81.1443 206.344 80.5922C207.573 80.2108 208.647 80.3814 208.959 81.6612C209.335 83.2271 208.005 83.5734 206.846 83.8294C206.203 83.9749 205.521 83.9548 205.355 83.9699V83.9649Z"
              fill="black"
            />
            <path
              d="M233.992 86.3589C234.575 86.3589 235.162 86.2986 235.734 86.3739C236.587 86.4843 237.104 87.0816 237.094 87.8946C237.079 88.7026 236.567 89.2748 235.704 89.3902C234.309 89.5809 232.908 89.7466 231.513 89.9322C230.585 90.0577 229.802 89.8118 229.511 88.8733C229.169 87.7641 229.897 87.192 230.811 86.8206C231.829 86.404 232.913 86.3488 233.997 86.3589H233.992Z"
              fill="black"
            />
            <path
              d="M205.109 65.6713C205.109 67.1568 203.026 70.3338 202.128 70.3839C200.969 70.4492 200.442 69.7716 200.396 68.7277C200.341 67.4429 202.509 64.1405 203.378 64.1506C204.452 64.1656 205.039 64.7729 205.109 65.6713Z"
              fill="black"
            />
            <path
              d="M211.353 67.7139C211.373 69.3601 209.44 72.3011 208.417 72.3513C207.287 72.4015 206.725 71.8093 206.715 70.7202C206.705 69.3902 208.778 66.2334 209.666 66.2183C210.78 66.1982 211.307 66.8155 211.353 67.7189V67.7139Z"
              fill="black"
            />
            <path
              d="M14.6349 82.0176C16.0351 68.015 19.0866 55.1016 23.202 42.4391C26.2334 33.1041 28.8231 23.6035 33.0038 14.68C34.3488 11.8043 35.9297 9.05395 38.2685 6.82057C39.0263 6.09786 39.8645 5.78168 40.6775 6.60477C41.4304 7.36763 41.3501 8.26098 40.6424 9.06399C36.4667 13.8068 34.2585 19.5433 32.3061 25.4253C28.005 38.3689 23.5282 51.2622 20.7077 64.6474C19.5232 70.2735 18.7453 75.9598 18.0176 81.6562C17.8519 82.946 17.6361 84.1004 16.0201 83.8444C14.5897 83.6186 14.6349 82.404 14.6399 82.0176H14.6349Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_9_12">
              <rect width="247.829" height="240" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <p class="mt-4 text-lg font-bold">No folder selected.</p>
      <p>Please select a folder to view its details.</p>
    </div>
  </div>

  <div class="h-full" v-else>
    <div
      class="px-4 min-h-[64px] flex items-center justify-between border-gray-200 border-b"
    >
      <button class="rounded-full hover:bg-gray-100" @click="openModal">
        <div class="w-12 h-12 flex items-center justify-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 5H6C4.89543 5 4 5.89543 4 7V18C4 19.1046 4.89543 20 6 20H17C18.1046 20 19 19.1046 19 18V13M17.5858 3.58579C18.3668 2.80474 19.6332 2.80474 20.4142 3.58579C21.1953 4.36683 21.1953 5.63316 20.4142 6.41421L11.8284 15H9L9 12.1716L17.5858 3.58579Z"
              stroke="#111827"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span class="sr-only">Add New Information</span>
        </div>
      </button>

      <div>
        <!-- Mover search here -->
        <input
          v-model="searchQuery"
          placeholder="Search details..."
          class="p-2 border rounded min-w-[300px]"
        />
      </div>

      <div class="flex space-x-1">
        <div class="rounded-full hover:bg-gray-100">
          <input
            type="file"
            id="fileInput"
            @change="handleFileChange"
            accept="application/json"
            class="hidden"
          />
          <label for="fileInput" class="cursor-pointer">
            <div class="w-12 h-12 flex items-center justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 13H15M12 10L12 16M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L18.7071 8.70711C18.8946 8.89464 19 9.149 19 9.41421V19C19 20.1046 18.1046 21 17 21Z"
                  stroke="#111827"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <span class="sr-only">Import</span>
            </div>
          </label>
        </div>

        <button @click="exportToJson" class="rounded-full hover:bg-gray-100">
          <div class="w-12 h-12 flex items-center justify-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 10V16M12 16L9 13M12 16L15 13M3 17V7C3 5.89543 3.89543 5 5 5H11L13 7H19C20.1046 7 21 7.89543 21 9V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17Z"
                stroke="#111827"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span class="sr-only">Export</span>
          </div>
        </button>

        <button @click="showJsonModal" class="rounded-full hover:bg-gray-100">
          <div class="w-12 h-12 flex items-center justify-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 20L14 4M18 8L22 12L18 16M6 16L2 12L6 8"
                stroke="#111827"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span class="sr-only">Show JSON</span>
          </div>
        </button>

        <button
          @click="openDynamicFieldModal"
          class="rounded-full hover:bg-gray-100"
        >
          <div class="w-12 h-12 flex items-center justify-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.3246 4.31731C10.751 2.5609 13.249 2.5609 13.6754 4.31731C13.9508 5.45193 15.2507 5.99038 16.2478 5.38285C17.7913 4.44239 19.5576 6.2087 18.6172 7.75218C18.0096 8.74925 18.5481 10.0492 19.6827 10.3246C21.4391 10.751 21.4391 13.249 19.6827 13.6754C18.5481 13.9508 18.0096 15.2507 18.6172 16.2478C19.5576 17.7913 17.7913 19.5576 16.2478 18.6172C15.2507 18.0096 13.9508 18.5481 13.6754 19.6827C13.249 21.4391 10.751 21.4391 10.3246 19.6827C10.0492 18.5481 8.74926 18.0096 7.75219 18.6172C6.2087 19.5576 4.44239 17.7913 5.38285 16.2478C5.99038 15.2507 5.45193 13.9508 4.31731 13.6754C2.5609 13.249 2.5609 10.751 4.31731 10.3246C5.45193 10.0492 5.99037 8.74926 5.38285 7.75218C4.44239 6.2087 6.2087 4.44239 7.75219 5.38285C8.74926 5.99037 10.0492 5.45193 10.3246 4.31731Z"
                stroke="#111827"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                stroke="#111827"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span class="sr-only">Settings</span>
          </div>
        </button>
      </div>
    </div>

    <div class="flex flex-auto h-[calc(100%-64px)] flex-row w-full">
      <div class="min-w-[320px] border-r border-gray-200">
        <DetailsModal
          :showModal="showModal"
          :details="currentDetails"
          @saveDetails="addNewInformation"
          @closeModal="showModal = false"
        />

        <ul
          class="listings-scroll overflow-auto h-full flex-grow"
          v-if="filteredInformation.length > 0"
        >
          <li
            v-for="(info, index) in filteredInformation"
            :key="info.id || index"
            class="p-4 flex flex-col space-y-0 cursor-pointer hover:bg-gray-100 relative"
            @click="selectInformation(index)"
            :class="{
              'bg-indigo-600 hover:bg-indigo-600 text-white':
                selectedInfoIndex === index,
            }"
          >
            <!-- Directly render ID here -->
            <div class="text-[10px] opacity-40 absolute right-1 top-1">
              ID: {{ info.id }}
            </div>

            <div v-for="(value, key, idx) in info" :key="key">
              <!-- Exclude ID and empty values from rendering here -->
              <template v-if="key !== 'id' && value">
                <!-- Only render h3 for the first key-value pair -->
                <h3
                  v-if="idx === 0"
                  class="text-base font-bold pb-2"
                  :class="{
                    'text-white': selectedInfoIndex === index,
                    'text-gray-600': selectedInfoIndex !== index,
                  }"
                >
                  {{ value }}
                </h3>

                <!-- Render divs for other key-value pairs -->
                <div v-if="idx !== 0" class="text-xs pt-1 opacity-60">
                  {{ value }}
                </div>
              </template>
            </div>
          </li>
        </ul>
      </div>

      <EditInformationForm
        :info="selectedInfo"
        :isDetailSelected="isDetailSelected"
        @handleUpdateInfo="handleUpdateInfo"
        @handleRemoveInfo="handleRemoveInfo"
        @updateInfo="handleUpdateInfo"
        :key="selectedInfoIndex"
      />

      <DynamicFieldSettings
        ref="dynamicFieldSettings"
        @updateFields="updateFields"
      />

      <!-- Show JSON modal -->
      <div
        v-if="isJsonModalVisible"
        class="fixed inset-0 flex items-center justify-center z-50 bg-black/40"
      >
        <div
          class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
        >
          <div
            class="relative flex flex-col flex-auto transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all"
          >
            <div class="p-4 flex flex-col flex-auto h-full max-h-[80vh]">
              <JsonViewer
                :jsonCode="jsonCode"
                v-if="isJsonModalVisible"
                @closeJsonModal="closeJsonModal"
              />
            </div>
            <div
              class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"
            >
              <button
                type="button"
                @click="copyJsonCode"
                class="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 sm:ml-3 sm:w-auto"
              >
                Copy
              </button>
              <button
                type="button"
                @click="closeJsonModal"
                class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DetailsModal from "./DetailsModal.vue";
import EditInformationForm from "./EditInformationForm.vue";
import JsonViewer from "@/components/JsonViewer.vue";
import DynamicFieldSettings from "./DynamicFieldSettings.vue";
import { mapState, mapMutations } from "vuex";

export default {
  components: {
    DetailsModal,
    EditInformationForm,
    JsonViewer,
    DynamicFieldSettings,
  },
  data() {
    return {
      showModal: false,
      informationList: [],
      selectedInfo: null,
      selectedInfoIndex: null,
      isDetailSelected: false,
      searchQuery: "",
      isJsonModalVisible: false,
    };
  },
  props: [
    "folders",
    "selectedFolderIndex",
    "showDetailsModal",
    "updateSelectedFolderIndex",
    "currentDetails",
  ],
  emits: [
    "toggleDetailsModal",
    "addNewInformation",
    "editInformation",
    "updateFolderInformation",
  ],
  watch: {
    selectedFolderIndex(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.isDetailSelected = false;
      }
    },
    selectedInfo(newVal, oldVal) {
      this.isDetailSelected = !!newVal;
    },
    filteredInformation(newList, oldList) {
      if (newList.length > oldList.length) {
        this.selectedInfoIndex = newList.length - 1; // Index of the newly added item
        this.selectedInfo = newList[this.selectedInfoIndex];
        this.isDetailSelected = true; // set the flag to indicate a detail block is selected
      }
    },
    fields(newFields, oldFields) {
      console.log("Fields updated:", newFields);
    },
  },

  created() {
    console.log("Initial fields:", this.fields);
    console.log("Created Vuex fields state:", this.$store.state.fields);
    console.log(
      "JSON stringified Vuex fields state:",
      JSON.stringify(this.$store.state.fields)
    );

    console.log("isDetailSelected value:", this.isDetailSelected);
    console.log("InformationForm component created");
    this.selectedInfo = null;
    this.selectedInfoIndex = null;
    this.isDetailSelected = false; // set to false when the component is created
    console.log("showModal prop value:", this.showModal);
    this.$store.dispatch("initializeInformation");
  },

  computed: {
    ...mapState(["fields"]),

    dynamicFields() {
      console.log("Dynamic Fields in Computed:", this.fields); // Debug line
      return this.fields;
    },
    filteredInformation() {
      if (
        this.selectedFolderIndex === null ||
        !this.folders ||
        !this.folders[this.selectedFolderIndex]
      ) {
        return [];
      }

      const folderInformation =
        this.folders[this.selectedFolderIndex].information;
      const searchKey = this.dynamicSearchKey; // Assuming this contains the key the user has set

      return folderInformation.filter((info) =>
        Object.keys(info).some((key) => {
          if (key === "id") return false; // Skip the 'id' key
          return (
            info[key] &&
            info[key].toLowerCase().includes(this.searchQuery.toLowerCase())
          );
        })
      );
    },

    jsonCode() {
      if (
        this.selectedFolderIndex === null ||
        !this.folders ||
        !this.folders[this.selectedFolderIndex]
      ) {
        return "Please select a folder first.";
      }

      const informationWithoutID = this.folders[
        this.selectedFolderIndex
      ].information.map(({ id, ...rest }) => rest);

      return JSON.stringify(informationWithoutID, null, 2);
    },
  },

  methods: {
    openModal() {
      console.log("Button clicked, opening modal"); // Debug line
      this.showModal = true;
      console.log("Current showModal value: ", this.showModal); // New Debug line
    },
    openDynamicFieldModal() {
      this.$refs.dynamicFieldSettings.showModal = true;
    },
    ...mapMutations(["setFields"]),

    addNewInformation(newInfo) {
      console.log("Adding new info:", newInfo);

      // Generate a new ID if it doesn't already have one
      const id = newInfo.id || Math.random().toString(36).substr(2, 9);

      // Combine the new ID into newInfo
      const infoWithId = { ...newInfo, id };

      if (this.selectedFolderIndex !== null) {
        console.log("Selected folder index:", this.selectedFolderIndex);
        console.log(
          "Existing information:",
          this.folders[this.selectedFolderIndex].information
        );

        // Push the new information with ID
        this.folders[this.selectedFolderIndex].information.push(infoWithId);

        console.log(
          "Updated information:",
          this.folders[this.selectedFolderIndex].information
        );
      } else {
        console.log("No folder selected.");
      }
    },

    editInformation(info) {
      this.$emit("editInformation", info);
    },
    selectInformation(index) {
      console.log("isDetailSelected value:", this.isDetailSelected);
      this.selectedInfoIndex = index;
      this.selectedInfo =
        this.folders[this.selectedFolderIndex].information[index];
      this.isDetailSelected = true; // set to true when an index is selected
    },
    handleRemoveInfo(id) {
      // Find the index of the item to be deleted
      const index = this.folders[
        this.selectedFolderIndex
      ].information.findIndex((info) => info.id === id);

      if (index !== -1) {
        // Remove the item
        this.folders[this.selectedFolderIndex].information.splice(index, 1);

        // Update the selectedInfoIndex to the previous item, if available
        if (index > 0) {
          this.selectedInfoIndex = index - 1;
        } else if (
          this.folders[this.selectedFolderIndex].information.length > 0
        ) {
          // If the first item was deleted, select the new first item
          this.selectedInfoIndex = 0;
        } else {
          // If there are no more items, set selectedInfoIndex to null
          this.selectedInfoIndex = null;
        }

        // Update the selectedInfo based on the new selectedInfoIndex
        this.selectedInfo =
          this.folders[this.selectedFolderIndex].information[
            this.selectedInfoIndex
          ];
      }
    },

    handleUpdateInfo(updatedInfo) {
      console.log("handleUpdateInfo called", updatedInfo); // Debug line

      const folderIndex = this.selectedFolderIndex;
      if (folderIndex === null) return;

      const infoIndex = this.folders[folderIndex].information.findIndex(
        (info) => info.id === updatedInfo.id
      );

      if (infoIndex !== -1) {
        this.folders[folderIndex].information[infoIndex] = updatedInfo;
      } else {
        this.folders[folderIndex].information.push(updatedInfo);
      }
    },

    prepareExport() {
      console.log(
        "Prepare Export Vuex fields state:",
        this.$store.state.fields
      );
      console.log(
        "JSON stringified Vuex fields state:",
        JSON.stringify(this.$store.state.fields)
      );

      // Removed the following line
      // this.dynamicFields = JSON.parse(JSON.stringify(this.$store.state.fields));

      this.exportToJson();
    },

    exportToJson() {
      console.log("Starting exportToJson"); // Debug line

      const selectedFolder = this.folders[this.selectedFolderIndex];
      if (!selectedFolder) {
        console.log("No selected folder. Exiting."); // Debug line
        return;
      }

      console.log("Selected folder information:", selectedFolder.information);
      console.log("Dynamic fields:", this.dynamicFields);

      // Just keep this line to avoid the id field and don't duplicate the data
      const exportedInformation = selectedFolder.information.map(
        ({ id, ...rest }) => rest
      );

      console.log("Exported Information:", exportedInformation); // Debug line

      const jsonString = JSON.stringify(exportedInformation, null, 2);
      console.log("JSON String:", jsonString); // Debug line

      const blob = new Blob([jsonString], { type: "application/json" });
      const link = document.createElement("a");

      link.href = URL.createObjectURL(blob);
      link.download = `${selectedFolder.name}_data.json`;
      link.click();

      console.log("Export complete"); // Debug line
    },

    copyJsonCode() {
      // Copy the JSON code to the clipboard
      const textArea = document.createElement("textarea");
      textArea.value = this.jsonCode;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);

      // Show a notification or alert that the code has been copied
      alert("JSON code copied to clipboard!");
    },

    // importFromJson(event) {
    //   // Check if a folder is selected
    //   if (this.selectedFolderIndex === null) {
    //     alert("Please select a folder first.");
    //     return;
    //   }

    //   // Read the selected file
    //   const file = event.target.files[0];
    //   if (file) {
    //     const reader = new FileReader();

    //     reader.onload = (e) => {
    //       try {
    //         let importedData = JSON.parse(e.target.result);

    //         // Add unique id if not present
    //         importedData = importedData.map((item) => {
    //           return {
    //             id: item.id || Math.random().toString(36).substr(2, 9),
    //             ...item,
    //           };
    //         });

    //         // Check if importedData is an array
    //         if (Array.isArray(importedData)) {
    //           this.folders[this.selectedFolderIndex].information = importedData;

    //           // Update fields based on one of the imported objects, ignoring the 'id' field
    //           if (importedData.length > 0) {
    //             const firstItem = importedData[0];
    //             const newFields = Object.keys(firstItem)
    //               .filter((key) => key !== "id")
    //               .map((key) => {
    //                 return {
    //                   name: key,
    //                   type: "text", // default type, you can change this
    //                   fullWidth: false, // default value, you can change this
    //                 };
    //               });

    //             this.setFields(newFields); // Assuming setFields is a method to update the fields
    //           }

    //           alert("Import successful!");
    //         } else {
    //           alert(
    //             "The imported JSON is not in the correct format. Expected an array of objects."
    //           );
    //         }
    //       } catch (error) {
    //         console.log("Error details:", error);
    //         alert("Error parsing JSON file.");
    //       }
    //       console.log("Fields after update:", this.$store.state.fields);
    //     };

    //     reader.readAsText(file);
    //   }
    // },

    deselectDetail() {
      this.isDetailSelected = false;
    },
    showJsonModal() {
      if (this.selectedFolderIndex === null) {
        alert("Please select a folder first.");
        return;
      }

      // No need to set this.jsonCode; it's computed
      this.isJsonModalVisible = true;
    },

    closeJsonModal() {
      this.isJsonModalVisible = false;
    },

    updateFields(newFields) {
      this.dynamicFields = newFields;
    },

    // generateFieldsBasedOnImport(event) {
    //   const file = event.target.files[0];
    //   if (file) {
    //     const reader = new FileReader();
    //     reader.readAsText(file, "UTF-8");
    //     reader.onload = (evt) => {
    //       const data = JSON.parse(evt.target.result);
    //       this.generateFields(data);
    //     };
    //   }
    // },

    generateFields(data) {
      const newFields = Object.keys(data).map((key) => {
        return {
          name: key,
          type: typeof data[key] === "boolean" ? "switch" : "text",
          fullWidth: false,
        };
      });
      this.setFields(newFields);
    },

    handleFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.readAsText(file, "UTF-8");
        reader.onload = (evt) => {
          try {
            let data = JSON.parse(evt.target.result);

            // Debugging: Check imported data
            console.log("Parsed imported data: ", data);

            // Add unique IDs if not present
            data = data.map((item) => {
              return {
                id: item.id || Date.now().toString(),
                ...item,
              };
            });

            // Update information list
            if (Array.isArray(data)) {
              this.folders[this.selectedFolderIndex].information = [...data];
            } else {
              alert(
                "The imported JSON is not in the correct format. Expected an array of objects."
              );
              return;
            }

            // Debugging: Check updated information
            console.log(
              "Updated folder information:",
              this.folders[this.selectedFolderIndex].information
            );

            // After updating information list, you can now safely set selectedInfo and selectedInfoIndex
            if (data.length > 0) {
              this.selectedInfoIndex = 0; // or other logic to set index
              this.selectedInfo = data[0]; // or other logic to set info
            } else {
              this.selectedInfo = null;
              this.selectedInfoIndex = null;
            }

            // Generate fields based on the first item
            const newFields = Object.keys(data[0])
              .filter((key) => key !== "id") // Exclude the 'id'
              .map((key) => {
                return {
                  name: key,
                  type: typeof data[0][key] === "boolean" ? "switch" : "text",
                  fullWidth: false,
                };
              });

            this.setFields(newFields);

            alert("Import successful!");
          } catch (error) {
            console.log("Error details:", error);
            alert("Error parsing JSON file.");
          }
        };
      }
    },
  },
};
</script>

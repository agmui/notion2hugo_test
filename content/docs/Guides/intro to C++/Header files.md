---
sys:
  pageId: "790d67e8-cdf4-4955-a0c2-ca740556451a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-07-08T23:43:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Header files.md"
title: "Header files"
date: "2024-07-08T23:43:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 117
toc: false
icon: ""
---

Unlike python or Java C/C++ splits its files

<details>
      <summary>Why do we do this??</summary>
      In C++ we can’t use a function until we have defined it
  </details>

`.h` file (header file) is like we deleted the body of the function

ILoveBen.h

```cpp
int ILoveBen();

```

ILoveBen.cpp

```cpp
#include "ILoveBen.h"
int ILoveBen(){
    return 10;
}

```

main.cpp

```cpp
#include "ILoveBen.h"

int main(){
    printf("%d\\n",ILoveBen());
}

```

## Classes in header files example:

## TODO explain y classes have a :: in .cpp file

Ilk.h:

```cpp

class Ilk
{
private:
    int milk;
    int private_func();

public:
    Ilk(int milk);
    ~Ilk();
    void drink(int galOfPilk);
    int getMilk();
};

```

Ilk.cpp:

```cpp
#include "Ilk.h"


int Ilk::private_func() {
    return 69;
}

Ilk::Ilk(int milk) {
    this->milk = milk;
}
Ilk::~Ilk() {}

void Ilk::drink(int galOfPilk) {
    printf("drinking %dL of PILK\n", galOfPilk);
    printf("%d\n", this->private_func());
}
int Ilk::getMilk() {
    return this->milk;
}

```

main.cpp:

```cpp
#include "Ilk.h"


int main() {
    Ilk *i = new Ilk(420);
    printf("%d\n",i->getMilk());
}


```

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCFCWLUP%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T230753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjV4ADjETpmXykPYxy1URPejKi2NozJ2YSNDId9xDm3gIhAMkndxHlbktNMUH80RusZ%2FuSbvWjfqfNH1TlxZxrr6duKv8DCGgQABoMNjM3NDIzMTgzODA1IgzxufRpFSfzkfj99lgq3AM7pM7PUjv3WLM7bn0Po4iI0K1tPLn4TYst%2BooLLedJ2IdSLJqRA5FF4nfpImsPozvrBnrCJvL8qjupHsJ9vxvvW6juwEJTww%2Ba0KRkwrk10noN1MfJ%2BuoJ34dUqjnrcoTKMYrmz1N6wB%2FnYs0ISkYkyhE3OT64dGbqzeGtrhgFou55kQt0XlCrbvuUvYVEKmSn4Wm4libSOYsvZfEdkVMjBNgDb0yvd0DDX2IZEGNfKpC7L0hdUYhI36Y13AOHjok9mL8hkPFQSBaly9XWS3hPVjk8z5Oe8%2BXXqpALgYG0xadHlSIzp6Rg%2B2YJoZcVpi0SNjO7B3U9OSKavu86nffl9zRsq5ZUsT5GbER23l6x07YX%2FFbIW35lyBZwkubfVEBesVEMqvsrneJnNjsSHIVAJQDgasjHUgsCuuDlSIDOUjRhgTRd9pw2gdEgLqd9tyCRI%2BuHUlsASUUDCHeIJApdkwM6fDxJzWfRLz71LxUVvoiOsI1hFifz5iS23sNf7iZz6feF1oqB7Uc0eikuKhn3m01DseepPnA9GdC4Zf0Ptn5YymT1w5uqOJBQgqnefxF3V7Lf8S9ZkLKjXNxg1SgABWGPPcL0pRh%2FWDZrXUjjbT7mKBbmWHfAldLMjjCfh4bABjqkAaoPyHjO3QPG6bmUwZzoQF08QTs0fpl%2F3xCKL3E7mwJmuOav%2F06NdvLXtoNsPWmqt5N0%2Bac6PiYMVzxp91hWgdu3OfcMV8xMFD%2BZWT5b8vEQIiSpXn6GyVISJZyfc00zuXWXB9%2F3BABjPHkVvmfFgHIirieHGLKQ1ATNfszok8QOSfrex4zMhHT1RNiOoBD0SSVoBw%2F1KTsaWXPJk8vTDRos%2Bl%2By&X-Amz-Signature=e25a32786b2ca65ccb0238f4f7254329e09a66f0439eff49e39cb232b0aae635&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

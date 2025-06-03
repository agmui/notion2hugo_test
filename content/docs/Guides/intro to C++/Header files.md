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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HYLFRIP%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T220831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIEDZNvvAq0wVZLAu0fMfcB3dht%2FMcYD1cIb68u4l%2B9v7AiEAvdzbk694ciGbhybL0P8jRDDspEp1z6zuJUCumnmKZwMq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDH0JyNqMZrKZNCEYaSrcA3XZDCq%2BxS0EUCOg7PB44cDwAMYRW673%2Byn%2BIynk%2FtVRGiCee6I6VHOZW3lNFwCVQO80aSvUcSWTKhaJt%2FMCblQ0QDXx6yj1p%2FeusA0T697UK6LfNIfcFsIese39TlKVAqNQzzEvFYayFb9AHkT3ptnJNoAl3h4Ba7n7xGgbDBjVSF9MbsCv8tun0y9a0iKVAKvuklmevA6ICVY8%2BjXs0ya5qPRHmDM3vJ3a5PagYYeTAPHhB6lXP2031T6trV7X33Mq848t2JTgiVbpCx6aUVsmRZzmqTG8lXNJ8BuB%2B%2Fl8RARZr71w7eXUv6mo7IxHmUHgXCKcNBx1hKNzW1GgOxtMp9XeaNF3nzO27Dkt5%2BARQ1007MnEdKMHBQTvHAz9e0RHQnGIsDd63uys1tEXagDSuaryIM2zcvv86yXN4Gb5zQ7aVv1m7YQlKsU26s2vP8NWnMwjHEflahvi1ssA%2Fh0tBx8Vb3%2BrdWGe0riU6qi6livi9WglxMNSD%2Bl5np102wPNCcISZ2hpscR4NK3gHVzoLlU%2BYV1W0kUpQubIxE3Fictxv7XL1AZFod3siYa%2B7D1xoumE8F9d%2FFGyZmMiP7IZFWh5eNrYzc708Y76zZVGRrUeH2QzU2uoVynTMOyF%2FcEGOqUBkaIdoetUyNu9qqkTmYncEiBjuqY4mOnwEnnYTwHxOlVz4ZRUS0%2FGs1gqalTCbm0QZ6kHYwZZbe0qzYOWYYv%2FzBCoNe8%2FpjKOzPcEA9Lhg4gbv7orpUVJ2ueqRYUDkSi1yYFXBQDTgrHVz8E9HGWHC8E85lVgq%2Bicvz5JgC4dwHGGOoliwBSSjrRk5tg6DU3BGm42HElUYonviDW5B9J0BBQObwS%2F&X-Amz-Signature=cedb655a7e9d30544280fe8bbba8359afd3f2724f58adedbac9aabee26cfa380&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IJ62HCM%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T061026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIAhn3vUI3UaeQebd%2F1aaCq%2BLSIscBYd3DD%2FjGIROsJIVAiA8oLeRsjBE4fr9lu7pX%2FmZUhJg2F2DILUp0Z2oD3wmYSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw5NcH3ZeqW9DDLRhKtwD1A%2F2vmIS9beQNgzvy6duK8mnJi6lSEMR72it2rpa02ZkJe%2BDYb3wvLdxnk8T9N8J6g731kJ28%2ByUuybarcaOMr3pqvRwphkM7RyoYVpP87M7eC4XDl7CjI4RbgXDWHTeu8zOaPHtBH08Rd9MQAq%2BIW%2FJHmVe0FkWfDPqbbVCmO%2B42i4jFYc1iQQX3xC1ZmFgxFjofsSxvoIn4smTEw1brHCKrtTz7ECRQyRDlKmTea9Eq3Qi6g2xxk1B8BzeMoF8dL%2FcHvWB6JqDGYJugN0mBvBE9MRdOUEBRoPX5Ft5MlMW6vOQeEyrBJ9LnvMUxPkIF04xq9botwM31I83KoGUXczfzX8U0GncqjVVcxTMyZJiTQJK1caHfXT4fcaux0azUvCKfioEdM4aoPrNN65QscRN4KcYTHCWXV9B9AbB7r9ObGY1ytuIVLadtdEesP9ZP2k4cAMbb0fekIhYi5cWwJT3JA1tIr75UopEUxLWgEYPsyqGtsU4KJqDAsFw4Z9gIzPpmsmpwV8TZ7Ri6ix4LiyUXXwJWiYCJ%2Bb69Pl2l6Aiq6Pp1peVqVbT3J0KhvCMpEHjM%2F%2Fw6B97EoKJitGawuEySwOWC%2Fc672%2FLE5P7XHo5S2%2FiTqstyPRNDz8wkdiPvgY6pgFTklj0viLIk9ctmEQ0jkqo%2Bh%2FCr9AiBe57PEtPnZwRpGbNmUiR0vFZjoMIwfU1g38SsHakCaGUUCURGpmVCNcezrr7i%2BMvubrYR7lgo9lwxZMehq6FeCyi5iETpdbOr8m4YKCPCIRS6QOTjVOm0JJwKNHv%2FhyiAtagdW2MgR7ChO5TFlDEJ7LYXsp7UjmmLl2ZdGUgEZ5OlZrFaH8YfJNX32caYzSE&X-Amz-Signature=41abb4b20147a25d6f3f79c049ad94b1c501a6231183319920b45274bedc1a8c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

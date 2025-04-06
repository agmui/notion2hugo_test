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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652G77VRI%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T140246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAlSXog7iXsWMnx6WBPJ%2BqxWFEfZ74R%2FXy1PrTL8gq4XAiBB4e%2F7teHf9FWCXy9eeU%2FJHagYCAWs14zfgPZLblAcZir%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMojbwQSAGwINQsqFcKtwD%2BueJpOf7XGnIUL96xk%2FtVmeK5mEjagZh%2Flut41745ey1eQh0A9%2BoALpZ5kFpZ3v%2BuDEWeaDgtkO2T3lOntJUxzBk0vr6BEETm1Ey2C4fRslFqC8OcZDFu7sXaU0wPwPyh7CvkX3pZv6fOw73kZxTTHTi%2F5HLPVfvsGtG3RYZTo%2BaT6vdOj80gEeSAZhKxn8NjKyOpgYHU7hybbaygzArvHzRXSZNWuMIGbKdTywlJi2c%2BUuaWrCP0Q2xixcseqQFcuOIm0cJLRJEYv54dgt0ALtZIVxT3%2BwTnWJqbYlSGBT9BnmaPAswBuREWJB367hk9hdO5JbltPqZu3Ps2Jpad8SbpQmEY5eCz137TojYyoBNdUeA4C%2BVYlzOglc0ufqwxtTMtD6E9KIgN32pJjxTXKRTga6ejYnnaDgsgoPoDeUhXhkGs7KqM3%2B7EZdCCtAUkwLIdcB2uCMTra6qtMOmRQIu5wmWrbVRTvphuJY1quFzmS3HVZ6lptGoU082mvnLv1vOF1v3ZS6em2RQbsXE86ugeiB5Ue4hVqg4w8Vq3a%2BwYcbTxL%2FO76Y%2F2w2LGXKGVzM9H%2FU5w3SlXh4ArKzhei7jhFaLSuEXXYMfAW2nvO2zFhld8IzUMsHa0Vow8P7IvwY6pgFxnnoXkSl%2Fppdcsh3aDZB9LylInIvNgayQBwjMnq9nVPBXlezuKu7lwmbGJD%2BieugzspR9WU006WSb%2FIjhxt5PF0qDCLKYGxTXw45WqikslJ3avMWdqKC2igQFw9obXohTp8QMUbtjmAYXZOeLdN7hd2hT8vQqqxw8W5fA9EVibiBILpg%2BW3RrkNOfhvamdaIC3LQJG7Vtk0ibzf75DboZWGb59DqN&X-Amz-Signature=0b23cbe4014ed9519206b5aeeedcc681b70127b45fc5b9521861a143f870d835&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

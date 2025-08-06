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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BMIGXF5%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T220936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQD79R4BDk9oSNazyLLK5jryJFcEK7J7O32ndqGoi%2FY%2BCgIgGPC6S%2ByjPBXgmeomQCY9JMUih4RA56ZeGpf337JO1Q8q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDHlzAcRKaFXUcMHnXSrcA19nxDaXjwystqkHtsNHxnaXUV4QGeDN7hWIl8Son8yV1F960fsFyilPtTYfTduEKtcqBgwKIScShDhJSqYTI6aIRvFqaL%2Fvlw30JFkGH1xXIH4bVFr%2FOfxZUYWeq5wxcWYrDYERgMVo%2Fldbc64ug5tL4kY3G3uMMh599yzsgx6ytltBIWYlTd2T12le5YKXeqi8TbagCCmenWAhFBILr6B46dcUyYYKe%2BeiwZ%2FGgq3ezwC9t4ogVEkJqJfU2lbUM59T6X7Sr9QTVF3CVp45DeV5Qs151CONPqcCHvAqxURxvm%2BhhJYJnb%2B0SZpkhEzAdNAOMxjuj8mQQZGlplJmf%2F%2B7LYRNsyD6krK%2FJEluX%2Fz4vmjNGwYNHFQm5es6krr41DtNI6lupE1kLlhetZOjKjWs4W5xYvr%2Bv%2F70orklFvkbOdYDIUtQVRP46J6HUbzx4BG8567jZAw57pkwXTFtO7MXbDBT35T4Z8KFd%2FLTCleQ3nD4haGb6yNlnukjr%2BA%2Fd37i7FvQ7RzCvuL1aA18G2zMEMi%2F8EhrnRvuADFG0K8Oq%2FUkKDO%2BNNrWuDio4%2BqGVDy2Utcl37oNcn3iLwyyNWw01M3oUZhFmcr%2FuwUOFXC6U9o4OXN5Q8jb6uPpMNCOz8QGOqUBOoWaE%2Bl5ma7Ku2%2BH5nPfhlJoyd5G%2F%2FDzxMXEZc62m7KcEUxXLMsR8AxIptudvR740VXyDHLZrRr9u17DwD3CxkclUmdEq0tiaq8A4A1be7g2g%2BjmbH%2FD6cduFW0L%2F89AjKMuZyR0aXUx9dElj%2FG8PYeSbK3NA1Te6ZgFx%2BZLIsE6ynsZp9rvqwyyvN0qJKJCbybRzd2tBn3JJV2dO0P0mDHe1FrE&X-Amz-Signature=beee21402a28a8cc1c102b8d0e6fdf92c830e5bd78af3414ef78aae0f4f4262a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

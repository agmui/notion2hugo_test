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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WV3JD3NZ%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T071003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICzag556bAo%2BhNjOECwfemS3dpZILyAr5yM1gJc20nevAiEAla0BwZkLyqVXVkfaL%2FCLTp%2FailnFmCTHfIIJksutp7QqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAAh%2F3JodAP4qDUZJSrcA4uTM2YO3uMiTTNHzhPalYzyAoS6V8GjqCLnmAT7P6jrROJzB1ox9o8NwVhe3rltr1hPa7wBb19suqtwAiczVn1j%2B4248tH4ebkhDrto7%2FVYaMHw%2FPpmiEIDp6rYnuaBX4f0kMdx6l24NxA9atX%2Bb6CgeUsF2XvUB4CFQZCD3R48BmX9CkAdDTYELroWJO%2BoH6kv5MnmstZc0SLVehYbnJVV2CIfNlCZaOeXj5px0nEWwx8ak1e2ebgF%2B1oz6R9E5wCPkTr83rzI%2F%2Flp6V2Bcv28Ww2ymeePpEiisx3fGBEkavOUVPn3fJrJTu6F53ilke5yzQHMI%2BjdeIcSN6kBC%2Brjdmsi3U8ujCggUtOBjfN9Jm6bAUZhqhDMf46vdmpyxEA3WDcZmbyp3CbeIN%2FUKVro%2BLQrK3TK5%2BiYfIU4HlO2blnk%2BhmUJWh8iLt8uKZXifa2P0ECMSNYBO4kOvL9vx7YDK%2F9acSGznrfqdhKS1O%2BVL3%2F05dxqi4VPszgeWxj8%2FmaQQhP5ry7aDyPnMTUkm9V5bc1chprxFkL03fawSBfotbZoa8sJVyW8rU7NdxjKyawvxhJ1W5fdKi1HhK48vBBnuwCaNYZtG73NJfgXl%2BlmnpIqgQII%2Brot3IEMIHfzsIGOqUBihk12uVJ0Tm2syL48VMcBn0Y4ypRR3cmDIl%2FWJ%2BEuvu3o4ZGRihrxjnGdYcw8us9YLfEc0I79Brx5hWexbisuEU9SUO50iTuqdTquYAL1wjYD%2BEf%2FbAb36QarmNdEncMwfgP78VQutNqcZ0gTnL7TqYUNmm8igKy6vPufExNBuw6x6RDM7oiMapdYx8IGatrdmFN%2BndGoWQv9RddKqUMEqp3%2BSg7&X-Amz-Signature=dd9df5ed2e91bca4aea2728db43e0d506d7b053547d54b4fbf12aec7a2b91213&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

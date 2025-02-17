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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG7TBOK4%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T061137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIHoWNP53uMSAWcnV62TYAROudBiaWB1mzh6OWmiTE2XhAiBcuh6CvWsFPdYUiOov%2BLLuj5hh7vO8lNclMvpiuVHAHCr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMB36VTegAF6uls%2BRZKtwDjvLbJDAvGiNSSFcaQfM%2F2ZBTEO646bn6HuEJGa0aAiL%2Bp56J%2BlfDO8fUZwFNhz4%2Beb%2Bn4Q7o6ABJjVMhjpuRz1DVGjz06W1DCFL5bbfWNhzraKx1jc3JsT47rUdV4YXOBLdatEhRUpNwf4iSYclQPixXLZp5SsXu4MlRRZSc12FwSpGYwvkdJep7fPAzAbkAeR%2Fb%2BGVEiDkPTJv%2FAOrxH6Mk4CZtJVkWT7X1KttJVZas2ofljMgZ2Jp73%2FdXxWbygvp0e0gsIcF6ZGuMP3mMCrLQSO74cKVtS8bnNXIaQhEfx58%2B%2BooMSa5DrBB1d%2FZpyS%2FSVyiB3YqnmUsDKU9RRFiWQ4Ai9CfP%2FzxJLGG3SJJzQl8iGjjizubLYUbjaljZ70oOFC2SYwG9Lcz2%2Byyc6La4rzTVUKNoDetatv5knlGKflTfcSVnyf2PI9LL7d3p3O0sLGxJ0PteiUAJF1d2xOeNvlZEn3UKvhh9YDjEDZBP6cxqquKH%2FBxx2VJG%2Bt4I7UTdv%2FxYrNGPIrQAhXKTtG7fL4iXyHPNGhBijZTJZfT3mr6wpH2fzoiJRAZSTrAGhAFjZNp6hiFOZV9zIgxd%2Be%2BOpvdzQSsYjr3NwAUMSa8odLlnKYubdZmQU2Uw3ZTLvQY6pgEoz7no2wI5FpGiQSnjEeQKEY5Vxsmq8PH6f20Ludlx5KT5dnDsMFQm7QxyvMpvSIONeeyjDs3uiyXYnQuIEiQvEekNDn8f558aVZNLN98wFFM%2Foirk0M7n5FDsjgouqW757UPuo09mnhgYtSwfMOVIv4Ak9%2FYXctFpAWkLuRB4r8PC7VojRFoNM52HC%2B6CBGnLuweemcNO0KChacnbNwj6pyFi5CiL&X-Amz-Signature=045ae177b10810ff387378e452d45efa3e02f3b6b597b3e13556317abf16c4ee&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

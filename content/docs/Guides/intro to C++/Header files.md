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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RURHCVPR%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T090832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHVgcXsK0YmhdsMA%2B%2BTN395ZX0RmTGs5IWvNhxsZsJb9AiEA1Drbz4QB2Lx4sspS1cb5jz%2FLXaq0oM3%2FHunTkmaM%2B2gq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDCgTK6w0JV5Vae8f0SrcAxZm8k6e%2BVx0eLbV%2BZmX%2B4AUtUNPbWjXY0eWnU3SQp%2FsmUTCzAGgdCavLM%2BHDGeCBHegxk2fIz1Ath2kBXx9kQQ79iCVj0oQQun4ypNPh6wC5CnTx3eT7LuIE1Ut4SDRDkX9CkwZoJ%2F%2F0z6tXm5UqBlpP1alRxe64rWcRmv6wvgx%2FMs6vVyalpbE8gKChE0iyRmLKop4tCxKHOdQH%2B%2BxgctRZwWYt7WfM7vWjdw0o7acE1nqAJtQTQZJdkMcpFkJmvoYKs2uYAL8bjpoJiQF0WTcqVizi6ifSXFJVi8s%2FLRVbQgyS8poSza%2FV93dEIqhSV%2FfsNlB87NsrHLMdYLed5TZZ4HP9WhnKNMqPF8sKk3hud3h2ZJbl3B9HxMWPYqRDBwGBv6ZAFFP4NNlGmsNEEAI%2BXzJsxqoFj%2FHZKmDCUJkQ1RuD%2Fbq%2FAdLYVfdSDLjTA0mlgx6E4V0n1aiiKiYD8a2NEJ2FDcog45B9JQyducROdSbJehJ%2B6c7Dd%2Foza46RmY3%2BiQNWMkz%2B76ECCgXr5BGMSGaH4SrTSwG5fHm6I9DwxdRqpBTLm%2FIJFKe9B2wnXP8242SQuSCo8zQEwqHkPZs3p%2Fu%2B9IZ%2BS7FlvY54P7HWuP1JJkGeLhbdSnxMMvmtr0GOqUBrKoer0EurCqMU4fLIfrlfvUUMdfKpkMdKg6ia1JHdgWJ6rOJxstszKyAx02ttQBlPcuGrksiFQWtKgbMFye%2BVlLW3wEkp%2BXW064VyDOXxa6TR1M9LHfeAVwKuCFZ89XjEPwgxvKRC1LKn3kq%2B%2Bthl4ccchg6p%2BdWaYthCZ36EAszqWDEAi89nbvF%2Fnp%2BPNIBq%2FjUwWe2pwyLRbLvq0wujlCVGaaB&X-Amz-Signature=b45610e0b7ebe85ec7a2dc92dea2c131e217eac0ae78986a157b4dc2d048ca0b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

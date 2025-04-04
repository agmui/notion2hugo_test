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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQYJC3MS%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T200904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2Fh2qlsarr%2FKfFT5QN2KNvvQLrecD0i47hz9gkKH8ayAiEAyu5wXp89AINK2aRZiX2FU5AQEBRES9bSfq65skzi%2Bscq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDMOjy7U29T%2B5fPByMircAx%2BmFwFYkqRZkb%2Fj3o3IBc6bnRex4E%2BdNQveL0NqBJIPiOfP0%2BBkHaxQpiCaMK6utpD76eI6MvrxdWjIiEy7Rg64DZfh11RzQMFpZH8L9JewOeXlpNWsM%2BEZDgoWLp%2FBGaCC0GLu8PU8gTBVAo1SaqiP8%2BUxKycgBS5M%2BH7H7O%2FhAi9%2F0Guzr1wiE4nG3YyiYAP5IgICFTU9pMCcisDo74VLYaLGRzxL3rc6V4YvuWvBIQ9kviNJbOLI2GD83cqBORC4D3YfwKBMZIZF7rnZwqSiur8SYF8f3yviOTFLk3Mg%2Fzmlpy41TKiURB%2FpFJ%2FneSTCpkZQAGczv1ynOUoHSG9ci9KdmjRMqN9oXeCH%2FcDo64YV%2B5wg5Hknu1BKaJp7oLSWPWFl3d1lHDump0WlbHfOZEUWJqgbXryLLi21ZjumxwSS77bO4emiGhLocVER9h5Y5bPdFV2Q%2BDYGVh48tqNTst%2By55dT5FnyLzuD8AmvbCMX3YVjSgS3MXr%2BSmO9R1OZAfbA%2FYEkPQAFcKyEMQZHMde0LxlSG9hLKSSyZS4Ikn6U30J0FyOO4Nn15wJiqebq7Mm%2BHd38uCORJ7CCz7T%2B35iSpNusdw05QU6tY1Uh8EMZ%2F%2BKA7eGwguywMLHuwL8GOqUBMpmuMmNf9eNbb1VlyKjGY2e0K5YJSuiF3qXBB9GPLBm2fTvDRx%2BiO1qezoBjxGdZM833Y49zO9OxT70Wnpy9ZFt12osIL8urTHUgSAoMVAfCjwAoag1Xp%2BBJZq7H6Oan32hHWL1WH1V9ElaymK1NlVPmPrEQzH%2FbeIaW3bZWQrnwQADIgFxMe86hHVby9aII3647ZX06ZGol0xycVnNbU6iFXKYf&X-Amz-Signature=4b660f2f026064dc76d10821ba72ad5e37abea7b679ab98a1737c61b8d5ef4e0&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

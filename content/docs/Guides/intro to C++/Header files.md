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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AGCOMZT%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T210743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIB1%2FlR8Ut1vB6E3SexPr41SrWAVwH4qVmjzj9jIozUq9AiEA7eZ5yd4OdarqKX%2BafeCyqQTylYRqLZZ05FX4S9bnycoq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDIMCAKNRknKrDaq9ayrcA6m5AEIEfkY67zJ680Pr%2Fi%2BKeTCV%2BOFYEGVQQO0lUtZCuOQ5%2Fe1NluUEQmzvh1B64DC1jy0TV0vfQ5gTT3HojoFlfFB8VgjyCD98vQPfPYf56G%2B8d0PzgDVk%2BwzI4MB%2Brl4a8%2Fpj7bgPjaTzFeZIqHTDWIQhYmFjVLZshK%2BFt4YeCH5TY4rThOpeHpSw9UVCcWRG%2BBKB3ZneMY8X6fuzsX7ot30c0aaGxamu7TUyEExr3DjuVcNmWd%2FbuE7rDvd0sid%2FgxoJsoy0aBQJEeiDtjbwjyVajGGS%2BsBAcr%2Fv1hb5xZBvIppUxF4%2B29OIaMUe4UIRvJYCQda3TS0fInyV%2B4zrH9gwYndnu7oM41651%2BAhc8PTZ69wuH39vQ1ukdk%2F5GooagRyKryllIc43vm9v03oPNMCGQQdKe6D%2FBBdjuYdfgdW7rO1vdsXmO14AoDOfVDlEL5BeB8Ip7UWbLfFYAj%2BoqEaCl2NcPRQnlJJ5qwJTYPTuG1vE7Cz30Tmx4IveNLZnhFO06cCc1s24guvNYU5hIffkUWqmb%2F9ryMKKYcSgsw0ORC5PKFV%2FKW%2BFE4RDPiKEx%2FjA7TTYWYOM2HWKbcv3rnD3NGPzGoC373XJAGB5xo5cEtZibkuzjp%2FMLyL1r8GOqUB12exDv%2FEexk8quL7WeygMTsJqSnL3Ice60tByAEY5N21opv%2B56cUfv1l0BfhmnH08vZ%2B4wPmo30pHlkTYSTJeQr9DRP%2FV0kWpI4sYvTHKUtJ6PUwehImY3xugWDskFMvtR7S3Acbj9bdiDWUL%2Fpse9ya6naWXIXwCIBDGDaipEzhACk%2BPGZnxrO8s8FTuNXeKomrBsOMjPrVLOEkEFN%2FdkGNjn6q&X-Amz-Signature=c9d78b35d8cd4c3bad6d536475d3706ec25a76895aeabad25448997870d691c8&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

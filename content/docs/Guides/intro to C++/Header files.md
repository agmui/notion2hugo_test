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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5A7IAZR%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T190236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIGcbjzRBC36i4q3AgWa1H77XaAylkZV3p6tDqnf64ZhfAiEAgr184UwXXumnThxil8f%2FAD%2FJnCagw59cvreT50xoYUoq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDBOdjlWqF5KZD5PiUCrcA6%2BcP9kH%2BzQ9N7a4M05ZzlQe6LRO%2BMD2CVUzO89AVmCkfqfkmH5lqMY3MnZIZPMu8Fs2VtrTFMBHuzKTPqLzxfGxuwrcdd7gKPIq%2B9pf1a4VFZ0clL5pdkBF8FqWI%2F6kjezfI5xH4n523oCU5R5ZYrTvbUAVfNAVnhnYuAOzaKIYd%2FK8qd%2BQMz6KBJlZx9QSMfMUczQM6jv8JNSyhekiCo7O2iuXhYpxbex2N0iqtApJ0IcqUoM2mqmSEEhVZ84A5oDsL18hG99RGW04fnmHfmIR0NSS0IWmess2GERLRd3C6AEz1obdrP9V84PpCVdqsDP9YvtrYvEaNwisX8LCnrKlKBtD%2BQQ4d%2BfLTjQtzVb2M0bSKk13bpLE2wHOr3o53nq130qQffoJFBdqeUfSmoyjbDuuj5i%2B2pd%2FO30kebUgnJlUnc%2BHz3Q25qMahFKMjHeMbB2yRx1fQzSn%2FAnlqqjci6KcPmT0YiqYgvNuANBd6gb9lFD%2FyCNrg2Kxtuw03Yw0srfc5EAYYXWiAss1KxDWH%2FuBcoV1EQn6u3VXCE9vslHCVWJNcmMADWmZEuWBW3Cvzs7srLjt6JUvFels9qQW8VCGTwEsPp0fdw1IGYcPmlBCN1xAbgT4VokxMO%2FrqsMGOqUBszaHj7IBbLX7CjojHysQyL99yHe5eg5vGXehW0RSPHZNcxRGFXXXGmagZZoQGhoPjf0uubCbWR0TZJYlfGm5ojRiUL21%2FLQxDYSGV3hSA64RdZj8Bxw7mj8%2B75jcQ70Ngg52peJ5QkJnga%2FdKc9VSEwIKAxhg8V9kodRRolaBiyN6t4bB8qFY5F19L%2F5g9o87BpEkBIq2eYW6Pg9uEUIGe5W7BHX&X-Amz-Signature=3a943a01c1ad59e2b925846ddbfd4b1f08610367c0efec3023b899e87f45373b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

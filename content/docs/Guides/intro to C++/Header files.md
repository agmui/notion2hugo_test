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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTS4PGQO%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCIzsIWujBboWDbzrhWGzlj2GJ5IYBU6dDbCi2RaZfweAIgTJ2%2FMBpFw%2BFWM4Yn0GhNo9VO2SoKDdYVBg%2FI4Sx5hPAq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDMMH9ZBx785BN8JsTircAzbSzSyhGqNZ4GFQNJcEepwW%2BCFOjJ4zblmTG1tgJXxbCPhvV25K5DOd%2Bf8GtO977zO%2BqqbAiOPI9KIdg%2FB%2BNKh3CxtlvISyv%2BV6lUecNi9P7MvYllLtnqJpUFeI5%2FbTI5cTzpSJmTOINljyHYnjb7SlssgiLJ3tXfIpD%2FxjBggVLIRVNLGTk8vbUGzUxFbrWtXF4vwskiLO1FlU37MpvrU4OcJGasrytRuCI85j6oXylUKCoILnKtMrHNai%2BKKky%2BSXNKzUN3sWWU6FuW5iRdyhC3RP4OxCxYjbQ0cuRj2CwdXSb5UQEBsysKShhuLRrEkKtieUr3mSTVZwNTZXykSKRG8aPxs8MpbxelL94EB1nOTZiHWzdq8oANqHxRS%2BBL8Fu6fIckJoLn8Yr0S8mpcCBcqIwhHQ75khk7TIPshgcsNh9bbFcIZ%2BBYtci7WD8jbEMx6nIBcVharZl8Vcnz8%2B6Jq93ojRL0Jxy3H7l6YlO%2Fsb4wwMjGNSWbtH3L%2FIB5rlQB7Ofv18wrFFKW6U38eZ%2FSZ6vSK99GxYhqU3FXMDU%2F%2FeqoP1baVstirn744vew%2BYQ6fQHtSBpP7492s7hfPvd%2F%2FGKo7zASF49yru%2BcDYCxJDjE89h%2FxG3aAWMO%2FikcQGOqUBlLmnXVbrdbhzEDojnEldR4N3A4%2B13pbqxI7WQyMVEjV6aMmkfdwtpmwp564TSc3rqpuGd0NDraHNgZ0Tdyn4%2F%2F%2BPofxJWdssvYYgHVilhuqLB%2FSKYBSUMazP9d98PUdHJtUc3tzxgpM8jcGxdrXDSow1MHwqvjpI1EvxM%2FbMMxqawfyeYpLcvSWzU9BjaTHRxXu8p9kHclq%2FA4w7sbZ5xJnmZLNT&X-Amz-Signature=0643a3fd3e8912434403129edb01153282ed19227ba8453ca59bf2072541b2df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

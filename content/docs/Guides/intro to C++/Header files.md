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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBJ6QK7Q%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T190106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDntUqZtUDOkL%2FFNWwg%2B9U%2BpKTALOyL90IrJUxZzWGDHQIge3cOArsBurcAriLXQBgvu1DuvDFfis%2FXChnQjikUZGQqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFMIQZJrAFIrNSslCSrcA3JYOUflIvXpw%2F4DN%2BuQFBNuiuDVzddG399CNmFA2D9fRh6TVM6Wg6cPM5mcN8FtLgQFnZOWyYMjAZEzBodGyCi2yjfM33GEt298XAFQ9IbyFwhzg6jod6CfxsjlsY3je6nUb%2FarLQNSpJEpnx%2BhXx1ahhhYhqDj4f%2B7GTScK4NuHigV0%2B9tyIPAEhnfDFlJLd7jWQ8TZcZarsu5rTcb%2BZSVjYeukqGmPhsUyfciDMSwt8qcHRkPSlXXd9axZ%2BPultbDpO7x%2BqGpb0mWur3XcF2qHPvwDSJpWdqlAoWISBUvSOsIlg7HU2%2B6qtBJoaDmp64PHSVPY8lFEh0Qg8YJsMklp8UcWMSRXdFUQkXILCVK%2BHVxyB60b3DuZwtuf4mk8oyLvrqja%2FoPzTvtA2wkgGxco3Ab97aobkrEfWic3MotAQxgSYiiJoZ0k6woG30cbFKGKp8capXnCq8lwze8v%2FoFg6Iy17ecLDz233qDRmC%2Ftc1fFMdyP%2BQrwFe32kHcGzQTlhLpMpworyhTGpl4dgqWXcMQN%2F8xXGL86dfTQg3EHjqirx7sP4I7ThRIpetUkuzP8vvY5oYxT64SAGHYuQKtIoafbUJp6v3oBBIgBkZiUHdLebtPSq3SCDscMNObp8IGOqUBv2Kj%2Fvg1K%2BIEQUFKRQGVvia%2BaVw1lRNUiy%2Byc%2B9kAlNS5t9itiPYs1FEHMkooudx5zh8Djb51R0aCY8MsVlbrJTmftmi7J8Z4L60gG4eKXuk0r70zsJWsiEWmI7Vhy9DX1dizsDYmsI1uy%2FTNHTAVOxQyY9DRJVPIQRuMlYmoYNN2p07FoXaDS6naZwZg%2Bj1RIjQuL%2B180OBB5bjtQuSxbxA5enM&X-Amz-Signature=79d2fa0c8c7a597be6d4b194ac2f6c2246f6b14cb8dad88bc71150aac8da6abd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

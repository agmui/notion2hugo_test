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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVJH4BL7%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T150802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHIYyCoWUS0il8QDnGIpTTl5B8hRi0jRTaT679s7fmqdAiEAoVcM07hiykHLJdnolSkP2NK60YTboWJ8Qoc3UDZKPs0q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDEi8evPUUNS3ip7iQCrcAxGV9ZsXtH43Xrib1TSa%2BcGENRpmJMLMpDxpC%2BM4gQEi02fyUY2gl1BuCIwRGeu%2F%2FyDzhAny0q1cLeyVwBkmNpAmi6CjJGKjMv4OWxF%2FrxXIYNW0lXd%2FzpexSibJb%2BwJXFAPXiU2vwPhiglNKOr2eCYDnKBRhZRIu5%2B1ECl5fY1fCYQ16vdP%2BDfOQuHjbVVRo2V2CMW53ByzpizfFhksiSTsqDzIFpEIT2grAq5KNm1npTOsuk1SQUWBdCAL5dZoqF0dkS7lW37rNcFQ08%2BxlPAwa4DDP6Nd2wct7Kkxc4VKSc6%2BV86n2HKrFllMoDuUOHI9KapJZtLl%2BU3chCqdus6mB7q6j5nx1fuZwoLe0ilQoO1w2VFvDvfO2V1THDGoNXrlYQpOgCb4vjsXJeHgCGGIAR5uM9A0TYvisywiuX8uzp5TkDEK%2BsaqiKCfiGLG3FtdzzepuXqi8wavpPrrkqFCwn%2BS3gjDWRbfbVpHk1vUVO8E2HKZXjk8nCAt2WNKWgYEtPqk7QnyoyW4WzOJ5Bn%2B%2B%2B8XqWS6Af4%2BNB0w74Obp1MKxYvUcUo6ewFItjoJctKn8NDrBx38jmYqCMphi%2Bn4jRvnQFAxfs4swJ74q63BTvzkwbmCaYly1CCjMPf9q74GOqUBXCpDAVj%2FCcoep9lH1WP7FzZ8WppSKYNvN2xJji36OqwIgGQxOzhZwLhUaJ2c%2FuAgBIYVswVy6Jkcc17hCNWan7v11TLZowxCUH1dGzMOOlNvCgDy6X43rHRh7DsAHvsGriHvh6%2BBfG69PzrPsHKMxuBVlzr4bOSlgJ9DgnjFOnnC%2BG77P4sEihmZTNPjb079voUqQa31nZnL5v%2Btbn2cRlf5DerH&X-Amz-Signature=fabae56c2922544df9879706a3a19dcc27831282466ed427076f551baa879d52&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

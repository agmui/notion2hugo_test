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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVOFO5Z2%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T110825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxxjQHmAPTaMpdnN0%2FFd3FWpE1yXlte87xC0VTU9y62gIhALM%2Fvu2%2BUxfefWbae5TN0XYh8g5%2B3WYZrEIADBxBADLGKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYMT3UE%2FUYvbhHsYAq3ANTXPWVqGSh%2BfdyDg8rjuH%2Fd%2FsVZNJqCsjPqXR%2Bw7VuwPuyZJdHPIXqn1EezZJVYXY%2FhDr9dKM4%2FrWQ7Ylk6oHgUWW8U6bxNRGrjVCJLDMrdqIpT1TpPBReX%2BxEwNHUig3DXpZ0wDmLMdDPTIMv6B8dIJQleYP8bSPBRoIr0PoUZAJwGb9QAErTFCPRM4o7xSlg8mJeixAOByMguprcXjf2c3UDyHssaWhOuBWHtk%2BCrkhstXJvMuY1mAoM2BKJJghvD619ZKT6Uj5G01sm4aFWhol0wOlv9FK43zHvLCkWrmCwMhRvkDBG5idl4j%2B099NIp1GSvpe5tzU1noMoRqQTATLwglwdvwNYpatSurHtqj0t%2F9APN9mEhdHpSohaoLKZ%2FY9mFWU0Lw2N6G6bd9zbovbZBAwXtptny9HITXPkWu2wRl045DEancZOI2NWZewtRuRmYSUJAoPX4AUuibYOeNgLssrOiUyRws536s%2BtakaeQT0hV4Is7VclZIduiH8i76YfhJAvqsnfjcPbv1S7pvlN9jbhRQESjOExG6XRPeG7ubw340Ov5F4f4e8JHGmDCp5FhTj1s%2FXhx0Tk0WtLGV4aHuAI6t%2FpEhSL2bevItmtZUjPEFB76aebWTD%2Bk5TDBjqkAQaeCZSNpVhpH9BVipkqRJqOTcS9nEoLkUUKYIcWv7sWVIYyEQLK3KawFZdlsFlUCgsYvtRc6oerZlKJB3FHDm5nWt7xVtKA1sYBN%2FCo3Wdjyg%2FQedJ4blryNYGn8KoufMyU5%2BM2rz28ZN889vgxfXBppoUjV7iTrMg%2BlXKVORnEOHlLXVHcAP7ri3faJ0kGNBDiMkskaaKwgtPuCaTnfMpxDQJ0&X-Amz-Signature=b9296809910515253b75eb6a172e4c1a45b877b784f427fbe6ac875bb0590834&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

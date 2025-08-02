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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636H3MQF3%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsmuCyuOSaMaH58HXZr%2FkyyOXYD2IMixe%2F2VK8IrizigIgBXKqfgj%2FtJiJK5OyJlfsBfCdvb6lsjaTB6PcfSn25hsq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDHUF6m0kyTKbTR364ircA81E3YI0tovWzKGIgAjqY9O92UgICMmnvDvL0LKKDJD9saHzJGImbLVYnt4EZQ0Blg5kNoko6JNZCYXOrKqHVO6QETGhaDm%2BoxkFAJ2rXhkkZG%2FvQ6zj8F0rLO%2F5cx%2Bpw38B3bvMfkYz9tPmKMBu5U1btRJ6bDISFu31B7R1x211ZV1u4aLVZ2lo89lIWGBi0KDGmewt7vbMPXeXjZTXBLYjaS%2FmvCxwQ9pXAMzfpQNws3wgTVIbxJ9qWoK3RZCchAXJbPdBRKT9wxt2ELqPf0s%2F63GSRNBmijEN0A8YHWl88rpJmXqTI529m0LyakxoyPctTz167xScXGje1YXOz%2Fm4GfDhA91JGh%2FEzYmN3ZxuiC9p6gJdeTPzJt3wf4EZZg2H6q9SB54XctVALEv618s%2F6SIOvHPFRSSxnth9Uublcl3fRaWKuUcvu%2Bkmfplc9lZZlmQ6VDl59sCpwh%2BtNLwgjPgYuHQMbnewyB80zIanHI0rqI0Q%2FUjT5m%2FBW9hyob8CBWuVLBDwE3YVR6y0m5fCkvNQacp6h6McRrqxZHDWHEuhHkFrEu5UdMpswyuJvFJvBrd9KqoCRzv4LCQYvCvtqc%2Bxl0bx6YsVKhBlw6BTkgfrseA3r8W2pT4IMJyeucQGOqUBiCa9wy1rjlvXFyEByu%2FI9qTDMdjwXN9XzjcRdXG4YmdgABFdiQTIGjev1Ss8cgv2jnPphRNFfx7%2FdlmYC8hVm%2FvrjrORJRCIdvmVElYVyDzG9nwCtIAN95S%2FaZqXOa6eQm1VliBHkyfptVpmgUG6lHfo2etwPSwgW3wOn4Izzfi1ygU2pmXpb%2Fba7VlRZSYaUAak1WZjLg7VWRsGV4k3raO%2BIPW4&X-Amz-Signature=4aa673ce48868eb38cacc8eb779e985682c228e3d74a2b50f4a3c4d9e0c2803f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

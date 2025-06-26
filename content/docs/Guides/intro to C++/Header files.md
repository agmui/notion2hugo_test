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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKOO3FZ2%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T210811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIFxvnZeztTIupiyKFflf%2BgQBaRul0mt7rgSkNnDgIDLNAiB5W7gFcjShRIrX8KsIrark1wroVsHWDqxIKN%2FsXfm%2B6ir%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMI7qVeIVmsXGOtf5AKtwDwUv4zGp0jlXybz21WJqFjLP80BCue%2Fd1JJUs7hZ93PrDzolaTFMNk4STpVy5EedDwMai1aSTbp1w1%2BbAQpScVfgq%2BZ63IKIlQgaQB%2BCJqPcPWUNh2%2FG4CYuU9JpHx1GPu7Rrq0LGHaYPqhhHaRodWocko%2BQQrUbG5Y9eZtUE7qS1F21gMGLHdqFJznQFtofGwbbjxPVy8KPSnxjCEbRYoTKyFtxmy%2BXnQCcKwWFlC2Z76lxwcCEBShZzzQ0x7hR0%2FDALMLrTyxc00PjYAR7lWhhLodL3JODsMtyHACBiselGd2v84j8hD8pa4eR4Z%2F4BgyfrCVV7fuNOurV%2F61ULjrh4itUvUMa8aF7q57fFQgSBuFfpVl5YCUlRSah%2BTBIy7OBXtKmR4Wq2HZHmEbgu4KM%2FN%2FgWQLLnzl0mjM6dMBUeHOVgHS2FVxpWDJ4MqXUC3A6EFQGxnv8Fp6ym%2FHppBtWh%2BR4zY2h2qZwnH%2BNLtnhS6LDuGntCeMuz%2FDPZx6brFWg0SjjOVmSOMGxEppdizKTP16fO9Yp2jp6C6E5dgi9bQay%2FpNcSZ3kmP%2BcLtaQlebaGN0TbF4KvUaEd3BTkllFP7ob%2F3efddfmUW87G62TazErBXNq5P7TylGMwsMv2wgY6pgHalZB%2F0FjL%2FpMeDUyLDMTXG6dC0wGOhAU2auaI1qfe3is6L5GLhT4%2FHAuaWwLqJRS%2FCEzraokOWUKt7dlSVyAtAH%2BsZEeNtCiKSiOkmMlI%2FxHXQk3Fn170gfnF1gUIUENwx5TM8pRRoESLXkE%2BWO3YvPra1ddalga8Mfo9YAaOG2%2Bb7JPVfa%2F0h9EMzQJYIRyWra905854vrl7Teug60jdNbQa%2B5Pl&X-Amz-Signature=95b7ae96d5767a29e0f40e4077986f874faa9117ece74866b328c6274a9506e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

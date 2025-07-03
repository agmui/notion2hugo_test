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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667W5O5D7L%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T121626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDX0CeW4gOfwUoQ3T0HegRMJC04lHtxqHDfS8ubwoX3fQIhAMddkMDNq8WtSjikQ%2FVwh%2FbVDLUowX1bxlnT2d2nSomNKv8DCBUQABoMNjM3NDIzMTgzODA1IgxB0ozbLFcRDQPxFOgq3AMpTw6ONx4oGNxHDLT1TjaHq2Dx7bV45GNZh6eQ%2BpfwahIJF5rjboeLdXi%2BxHidUIG9TQ%2Fe6BRjKuAvo2BriTRXz8GHVRgfM3EGJJpCwkqB86qXZyMB51J2sCUIoXPziR%2BakSc6v1JLXjSRs8OWb6RqcEaPK8hX8FNONktd%2BOoQ6pu9AwiLNFOFg9i2E%2FdrNDjqw2Lmd5%2FjRLBeYJzAb5ct%2FyMR2qQk6poMDSwJ9AIsBqx3TBh6Qqb8qIcgTpGRhv4W56MsxKxUKtXskSlW6pYxswCUx0OvwUgvJriEdM9p9hk4Io9Hm4hHAkY%2BAoawNjJ8QCqe36%2FtDjTRzjVW1r%2BrVvs%2Fc7iI8zflzuVBk6VFw67luq%2FX3sHhC4Hbv670pHc8Q6btcsh5TRSvPvGN5RlQgkj3qsYvvwAD%2FawGoEUtaVe1vP%2FWdDM3rx6Y7w3nFX%2BAlIJoQUYQ%2Fnz1kAV9rpOnP5TK3LV1w7MAcmqWf1XMEOCJFy28OAyRM9iKX664Qb%2BNuKgEM40AFmKn1vKHJBFr%2FZIa4vPTyMrehcJHVZBPtcMxO0CFEjj%2BD0eoqmstPs%2FBlmsN5WySHNaP%2BDXPoapUaH%2B%2BuIh%2Be8czonylLJ%2BNLGjNmPpWEVcQuj9TETDn4ZnDBjqkAcwl9hvZzOWX5oKxf6f5mO%2Fw99yPp%2FwI9bbu3UIr42FPz3YjEKfMVQOVSHG%2FPD41ELC8ldaE%2B81R5mPr3VCVhqX2vV9hGs1ap9pD%2BW%2BLSrYxY2zoLl3qeYOOns23qMpKr9UUqMWvOs%2B02O4NJDpn77SGa2xvzYVppFhOtYUxtszgZoeIN0tEctJg%2FJANSEaMEXtcq3vYQ4ScsUeEQn0Dt2cLxrwa&X-Amz-Signature=b7e05f0fe70132a48bc1efe8c09a5762301ecd7fb59c6ce09cb7da1de4ebe1eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

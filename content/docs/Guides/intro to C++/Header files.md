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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYL2C5JK%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T160922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIHyoL286YmhpUUDgcWKUYLLx0CMI3zf6XEk8OMKewdKGAiEA1h4xnGWrEmC%2B2hjP8ts1hkEgTFtWIZHUS5lFzZeUhJgqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO9D3z7RbYNNy9Q%2B4yrcA5XxQrAYc6oMrc4nW63AsdCk6S83NyxuHjTaPe2GDLpjzCpW3Un3X3qLMCI6cis65TPIohsKS7ElMHgmvq%2BQrST2NH117%2BMFO1iIsKKX6kHkDhrNppdmYVYYO1JYZvREOCh58GLwWfLgl5wDsVtcXRCVBc4Q2QP%2FfE4M10K4EKarxhyhy0R%2BrdkALSOnogqnpxUopwjI1t5QapeaM9gCK4FcTs%2FtYT9RAc1qKokt4RARBSmT6D4FVd%2FBBgciaqPh05G8%2B3qauNjuykDZ2MFSkX7TY1ZKHT%2BxYfND5gFSn3ozQfRiwrMta4QZWyvCyWtNn5UdRbxhOtXApDaRYYIzulej9bNbW%2FL14rmSLqRJzWDzIBAXVY5jfJN8ctGFhAzZ5pxSeg1rRBU87soQhPDeq3g3VGXi43TxJOccsGdzI78acx8Rkac6qr3oO%2FqRtCYHEvIGex3eidAcQXAAGvTj7sNZTdqGcLKHrQ2joOL09fjfup0u1haLtvZ9CW6X5%2FdSIwUJfmiGywYt5XCVDfyxb5qSo92iqE2zV2ibjxQyZ0cH9zQeEBIbu%2Fr9ywdT6R1pEEsZNpqokMan9XinwPNByZCmFgjTLQPnU1qHQfhw6ZnVWHJSrafTMpTjC8JjMJeb9r4GOqUBys8C9ietmgkSG7GpTP7SxLZfy%2F89eZFgAmNU4MPKyGwZkjDl2tZzpHtSRcrBVRMSB5VKuqWOl8GSSgCJV2f40XV7OVyioR%2FS01zLecFeuv1Ongj2BeX8HuJ2XK6yLOVcMpTwbdUnERrtIHy8dfW6hSRSjJOPZ1TIZf96QO6%2F5k8QmHhkEvYJsz0o1sQlpzWCpmBMK1%2F%2FKvyjcxwCEVCngBL8nfqK&X-Amz-Signature=438867b30a978874281fc97d86efda2604e9c6bbeda9736bc216fd7a8061a4a4&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

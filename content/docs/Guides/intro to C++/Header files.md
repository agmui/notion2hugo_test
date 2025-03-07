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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2ZTXSBV%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T090818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDmifiy03N3iWFD8FOkp3Z9ZqrPJIws2M5a8PRlZdhMsAiAtSArlq8kBXNMDSWjUBooiVG7OFzhSu3L6OVSKEzufPyr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMXrgAm%2BZOsHe6OzZEKtwD9iWSuciMmpqr5ESDKz7XKjHysT3cxPN9vqQauP%2F7%2BX0%2BJYXoQAJQjD8YvFG2kiUYyjINJn1hB9zzT1nFPJYW2tsBJlxJIhxPvzVhwAIMkvI%2FHvMeqw0v1p%2Bpi%2F0QIjSWLMsjkixMjaCl4xYJDIie%2Bs5xXysGIrmYABji4f8EimSoU0gxa3ITfmZ7vmzK4DQ1jcnpFfvYEUKfTa6ijGD%2BW%2F5SV0pYSGnRBYgvT%2F7qt6RHhCs8bxg9sjHMkBwSqPoW3sNuz4D76D8Bjbo3vm1scqYT96X%2FNepoFMCoCZENh1XjTVT%2BcRulw%2FLmFwns3w1D%2BAnpa9iD8L86dFexFD1tHgCejgtK8goXNeHtSUTG9DswnhEb%2B%2Be0VdWdoWT%2FW%2Fwj7Xfs2IHkMh1goevx9UrVpLXXFE8tkKV3f0cdI%2B%2BbZN4mkZvnpRbge1yss0PzPVIpNWglOBvHubEoZV0bSpefMTNLp2oeUonk63meVR0eg7LZrkpVc7Zfcmm2cWgf5gS809bkzxjffA5YnGhjUwGqkNNG%2FJzmkUJ7FePvy%2BRJhQ1stFnyp%2BSR9VM0Eg2c65RorFRCv2OxF5u%2FD8TfGuK9DX40VnWDjv%2FXExkp%2BkF7i53h4Lq6U4gFiUJFbsUw0eWqvgY6pgGbcrqD8DmQmrgXkZGipyzH%2BuwHrey9iV72X2D%2B%2F%2FrE0hgRd9yvHCrQfDQFM3225V7V12mIuXp7ydW4pw%2BkzMtfzrNmfyfWA5WsGoj98zNDlpMyKkmu0ywBUNaZ7jIJMh%2FL0I4ljYgVmSSDGsFKw2VKh3%2Ff0Wm5N0PFA%2Bc29XHWbrBf5kzaoJ%2BQQBNzEfQgHGhFGbdRBwfGLtRLDM%2FFtlgH1JJqZT7G&X-Amz-Signature=3b39cc7f839e61ddc0c18b2883f97d90a36f38d42f3a78f11b30a764fb38eb6a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7QYC5J7%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T200911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP0lRjlSkCczo0V%2FxpTzVjTFTl7MWomplNqCOE%2Bw4BwgIhAKU73ZMJtzBCoJS0qIx0EOE9uP0FyVRNLTT8e7fYpywEKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxwkWrvhNYjL9JyVmUq3AMYQirKO6D58TtEZiThD0G91BgcM1oAmw06mJ1bIG9jFn5%2Ba%2BXhNWZemr7lfqcQ4zNCfwHL3cIGGxlLYKOEGvuX%2BfUVtPj1F74%2BCAH4LxzNix3yP6yJx8b9efAFXZKeXOnpZRILHriacD496MbBlDXW3uInAu7U6L%2BBwGZvKrlvqDL80oV55P5sNnK8Xcvt5QdSIHPQBuskPpyhSYm84Ch%2BwnTO6ueyjvW1Sj99uuPZfhNnTzkZPZzUQS3ssDbHnDjYZWqCVGF8wnBFxjpywEszG0X88WKmo7lqtWP%2BW8%2B3093ZLPxJlK%2BEPYlKnnQRoefIr%2BRA7uX7C0nZj6HcF906cLg6OYGg7chxELVdykqWUzAWg9k0EUbzpSMG%2B0injbljUdPWwYxrB15DsFERFZvuw0x9lJBNjyG5chmzYFfuX5wzL0VaFsMl2BkbFfxS%2Fbl%2BbzKJ4JfOFgUCeKrf2okxlltiXWkGO2chpjUZgnz7%2BuQCkrCHU0ddAsa%2FnZOJ3DcVSgRhcLywriCUb7GqXdJbpujvWOL%2B2MEXTAlkN%2BXWGwF13BBd%2F8%2BEK1bJ5Exoibp0vP%2BT17I3n2EruIq1Jl1cic8ZuA2tIxEyzHl4yDX1zVVjxUronI1oEry9zjCc0bu%2FBjqkAfMPtN%2BcJH70rIv1r%2FXG9uYY9FMYLwOr5cEl7N6mjJIQeDJfeUbpuxpLXUFnb7xm9ahd5Dk39VihnQDlf2TqtLJDJuKd0twGwOJKl5w7qqNYtn8n943gSLG7FMl2nI5OY%2FdjkPix%2FRCT1K8pHtVtiEv%2BgkGIil7DGI3w2a8x5Hpw1bpKuJzjyLvaglOi0clWLaw5FM0WgX5UxozXZQQClN7OHFQY&X-Amz-Signature=5e3922f387ebf48ac4b816a4aaa0c8ce19902e171891951e1d86f46a69cd05f7&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

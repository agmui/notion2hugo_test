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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMPLN5KK%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T190142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIAeYZmlE5fP%2BzW50anTuhhsHOdNwXUB6b3YIz9FzGw3iAiEA7U7SJCh2kMLEucIJpOfdgS%2ByonfIaN7ofonSE6D5ibYq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDLa%2F%2FFd3eBUVFtmoRyrcA6IjXdyXMLVvIzSTaGJKrg%2Fmi4Cy3DmeUIgwRAdPZhWuUThTcN3Qb%2BAynj4Kw8p2DlwXOc%2F4ogV2Slsg7gD%2B1dG0DRsnmIzAgnLrx35E1M%2FDTQvXsbL8BOcgDnhuOY5Fg01jdHBniIBsD10a1EgUY5Jr7vNEC6mdtdDIclBogkYQ1dw07VwbWIvMYe6Q7cXwvz%2FezeCPLmAsg4L390uOgoZAs6qftEDoMJyyicqEPGD36PV2MR1uK7KSD%2FQQd13hXXijTt2EuK3U1UG2xXtsOKQwkmAD5OLJcn8zeKC%2BoT8Ho4Y3DIrAnFrYTnfxyG2csPcb4I5%2FpVQkMCWh4OGyLiNPLfNve4tXVBmHfAQLoGjm2UXgAW%2BQOHkNMuk4aKnzLnSqoAhLtsczxW1VUTORsoZ85cNZesJo5g3nM%2FcEBZBOcawgPLiYnnEcYOEba8e2XAER%2BwePQDsrQnZ3wiJorz3FLZnLu2xDlWL724qogigdPupNALnQZRSaEtQpUqCK%2FaYCd8CLLxB1Yiry6bZucBdEJZzaXLZVfNy5Spk7YeS1DLYlFzemCsFGo8qL6sjQK5iOR9qUyn5sNeRqmDXMPGBc3UMcEcqMWQopX9bxb7u4yajtlPoJYzxXi6NFMMuWyMEGOqUBc3A1n1c0o7pyNbsZXwJofyttL1cMVFRal73ubc34Yo19LLTsgQJ26Kl0YeSB4yuNIDsqO80AEWKqkQtqV7ijPKiR7i75PZnlAVugag18BmI6Vbb69p5dq6KFymv%2BbnGFEz7Npe9p8HqI%2Fhuu8NlgvdaNdqUbVLlZ0KIlXBonZcmRO9JPV0bq0E6CB8M0iIzVq3GlfyLANUvmsNLWfNZ1Naj%2BJyA2&X-Amz-Signature=6ce4a03b8563f2488931a994f277d76fe1cf0a49d747e8f7e0864ef37748a1ab&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BREAJYC%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T150802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDndX7zr5DDF7ocFCwGSLGYVHvNF51KNmldOcPy%2ByRJiAIhAIG%2Fg95%2Fl%2FRCMoZDump%2Fn8PUd2VXUtDCpKtuJqRcRtUaKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxIMHKN4TqoP3gPizkq3ANQOd5PTgnFFoLetFsi%2B6y2aj%2BZRiYbp504ouBbQuo0cFnpXeZDA7w63XVBDUaLGj%2Bk%2BRdez0aroslfGa9hMeToEGQCjTR7TNknLFo8wsicipbDOGPX4VLZNHKG1yJeyZa3KZu4Fic3MYlIv1ECcR1eTyjWsec81ixK34es8vmHCxz0%2FI0kZeqB77ssBDegxvZphCGMKdDgzn52kzE%2F2RMyhSA9c9sh4sNtx9iFVpUIm%2BTzk1Xhw2M8gnPyaWHMP4M4O%2F3eJJycSIT%2FCWIsV5gOFlRgg%2FF0RF1FEHGH2pfo%2Bu3ip1Rq0uXu13PUYyrrULPMRlcnU2G5uKJLNfOLS%2FzRIRtG5wY3hNP4rJCAFWij%2BURqJcUqJUYH4r0%2BylQPRB86nqQ%2FtHw89xHbI0gzKToVu3b0Kca0vVFfMj9X0xzIKATOuBUD%2F2EHcI%2BFG%2FVEFOQwKhC8SfnfVd4Z%2Fk5EOurn5GY02AbObimYoH%2FUsY6cwNkOlmtRKdQcs5fu8%2B73x8FUhqGtqVcRqjrssexakdafmwabnsos9E5Wv8ss0%2BR3HqIXY3zkG6tsOSEIZuM2W%2B%2BkPIZ7hPqiZpKs5dXk%2F32MJlMdlGAETKUwWHF2jFans8d%2FqCdFD6LpHMb3XjDE%2BdC%2BBjqkAceD933%2FVEueSNmxyhOzqlVwXIX5KeGy0eyZ2rSdD9rLNkBLGc4SGQVI4MGhWtY0MnoP1e2M8ue7%2Bbh3uHZ3oRXoTldQD8jp5880%2BhPZgViHzuZzz7x9I4zwhPpbF1FhxY9rF871T%2FDBUyU5welclajztW%2BoYquDBEwL6eLDOJ1scVUFFgA%2BGO7exjseBklyBMNhLtza1srrq748rLL6b0ZM8f68&X-Amz-Signature=1b02c269bf9f2b3403384b5b65cd7be638a53716458f80979503f552ca59b1ba&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

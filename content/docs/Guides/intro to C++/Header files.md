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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OKNJ7JR%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T081108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRvEM5yuhZoqM2ScJyq81b66d8aCa2DgjfFv8oaVHbzgIgOOVAI7VXIP%2FCgKmJXJpE2fvnJbqjYAHL%2BJCa8D%2Btvu4q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDF8jmZtHk49DAeYZTircA2iRtiWVq3B9oITkb9mqp9cOi6B%2FLcgB%2FJR6V5YzT79zynZMtW%2Bi3BLUrgHkB0wW2dIFtqE6VfRE%2BdAkyLRrKM9%2Fp2uO38yrecS9klQ6xUXf0STBVbKPQ1o0azXgRTLHTdUN4CP9uLHFyekR4uWrLZloDaDBm%2BKvs9IpLoxOtrK2Okc5c3wXwwa%2Fh7i3sTO762k3G0rrubqlltcz47QmWquo%2FHAHDEHzFigAPEbnWM2ajPZ8jnZd%2F8ZhqhFvKrkEmgLRUPoVswt5%2BVABa9vDmYPmw6ZrZ4tjDmlz04ka8LzHx1k2pmrZvk8zSfkGDwc0sMebRLW7QKogg3%2FyfBZby5GNZFMQ4glBp1iAUsvg2E8IBpzmH1BmY2Bh3%2FnTPRyCFBQguZp0Dt0xqp%2Fh9pF0zC2wDUo7v7E7rgdPNWQK8pv%2BtsQ%2FjZxkAWsUnOnrWwSvCojrw2qZXwCAXgyzbirJ5ixOKondoHMDmU9xxyDa4OjnhRNg6t1Ty1wV9jrPNpkWINZymom2%2B4Abnlg%2BOtRMQpBM5ubshj70WUT0%2FBMTFlIjdCurMYsgjkx7lcU%2BMvpb99M4Lmj%2B3937LF3F7VTpyRFS6lP6%2FRKJWkGnqo%2Fl8bB3vYhNtsF%2FIAy7xbaFMMuFlL8GOqUBxVnU0d3BNzf5YN%2BPrlb6rcm%2BQyVHScFPbmT2AA2Nv78cL46pftt9%2FCvdH1gxX0zjrg3e49yapwAk7X0aKnK%2FBZQb4tGpbx76X9HI3gJQqfTEZxKGsu39gbn6bgKEfnYcLmNHCWNq15HAYDWWw02Dt1olOm8wgo1eDafy4KUpO4NZlVOpLOCRFipQyDefMNOdtIcVcHmO9luxl3p1rRy0OWE32GM%2F&X-Amz-Signature=bc37f7a27ea880eb05b7b256416d7d99d6052421ff794ea2166cde868176f22c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

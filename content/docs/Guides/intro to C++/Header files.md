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
  <summary>{{< markdownify >}}Why do we do this??{{< /markdownify >}}</summary>
  
In C++ we can’t use a function until we have defined it

**EX:**

```cpp
int main(){
	printf("%d\n" funnyNumber()); // this wont work
}

int funnyNumber(){
	return 69;
}
```

To fix this we use forward declaration

```cpp
int funnyNumber(); // forward declaration

int main(){
	printf("%d\n" funnyNumber()); // this wont work
}

int funnyNumber(){
	return 69;
}
```

we say “Hey C++ here I promise I will eventually define this function `funnyNumber` but don’t freak out when you see it”

Here is a link that goes more in depth: [https://www.learncpp.com/cpp-tutorial/classes-and-header-files/](https://www.learncpp.com/cpp-tutorial/classes-and-header-files/)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRHJI3PL%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGw41wwvieWdcVfruY0GnojE8U00KCo1VMcNXF4RrKORAiA0Ul6FwxeBwVlvxXUbGJ2aO5oV8R6lxDxxPmMDQENoOir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMefK8pSlEhvJ%2BWCGfKtwDmtM4OteLL8bsH58%2BPJCbt89bH7U1KBlCE2o59EXvul%2BaJBKTmz4LIzKcWt1khzkYguvKq01SB1VwqgbozZ9uuC4EClIgUfmcjQh8FepHj1KyAwO%2BLomtuL%2Fah1cfi0jpvvA9zwdLd%2B4CEZdcIAglbwhxnuuP0gushs9tpBORrViK03JLRchIVJxbnDFtoomstFCLiLRz%2BTKKICQHLEiSoKNL3lxSKj9Si3%2FPqVUGgXkMJ4kOlRVfrDyUjXTfcjgaqUiAdF7B%2BumQ6CvUsawaiO4uvW4G%2FqT6x1Rq0Og8nd9HUTuD52ZxUQZo2KdX8Sm0s%2Bv0mGg%2BIIkT94izKLlYxMrTulnb1hTUcYH1HhP4HZg%2BqL7l%2BUj4XOetntzIxpog8eoFI0LZ72v9uzwUwLevhNwFtKoUVfWRRT9aKYUwDVzAsdUqL1HlpT%2BBuajqKKOg1PxYldNHJtfqygBsiQe43KzxWrs4oXi3PVCAX0eNWYdMBOdOKxurYkOw%2FW3HjM1DHUHoXxbaERfPIUNDTL7kNFxQTfSLRxdmd%2ByuQ3%2FTKTMFZoXbp%2BzZ76lZJnOg0YCRO5ZAuyUO%2Ba4RBEsvC5uQzbNg46lllJxWdZsjbDUfOHSbSc%2BHDdf4hP1qLgMwxKblzwY6pgF%2BycDi18WZD9T8zIM1R1wjM4dnJzOp1bsldsNpnMRySt2Mx8mHvc2J%2B9S4WOVaXwWygvJaeWC3FmMuI%2FZBCdJ72%2F7Enerj7N1DswWZ0ppwFHTiNZuS63hf7WKAKMXIgBDPPTZ7wBm5uCwk2I9LVNosLtc7WWr5CmQArzjQ4mJItjZZa%2FzlZRlV44EVsvzHm%2BJI4%2Fe%2BWk9ckYfNlIFyGRdYAXtcEBQR&X-Amz-Signature=36a3ffc0f5cd6e1457beaf6e0c64e0fe561bee890eeaf71ce92254ed96382086&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

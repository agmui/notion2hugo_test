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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TSAZBFA%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHglXj%2BQ56zIoWsGDj2ojiTd9lZKbBNFJHEKhGYhv79wIhAJNpB1HqJ%2BMpAnzctAL%2FroWjFK2iDztaZC%2F7hmf3NwwoKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLMcQjIkhdTybOzpIq3AN6VBdbYzpQdarl9AmebnKUe9WWW2disULFYgkJjQdtbnAlm7XpGwm69pU34DDmlDhGufL3IlWQBCV6n2v2bPCNl8DfemR%2BB2Rb2OsurDnS38%2FHib7mYv8tjVg6uPZM3BYKKnV8soslltS7mkzSutvKmi9ewkRt7Ji1tNK%2FSu2mwEBFFbJwNa1n1PvVxFnWNAqj2B%2FLd2Avt9eDDZP0fl2Dpej%2F9y9Qz%2B0txekINdbJ5enI3ZbH0EAwzjfd2BVo5ms5RYrFh9ZmXd3Zhgq51qDFJ%2FnUXV4hX6DFoOUnQc7DGkpCUwWxXOShUYgG7GxadIEQSfpSC0Uxpd8DW6WSEcZv27xFONwJdI8P8%2B5yMbv62VXrnRcEgglNqvKIWSTEjk2RlfS2L5XjwzOWV7xMS3D%2FJvcHD%2FS2x8laAPjUodHOROBN%2F9O6Z0rpahsHljkTg8ZuRQkR%2Bnmx64qphymh2ycnvpH%2BZzJlS83jKQMiJ1jp3xqFyBhISnhi%2FyswRDEir5zpZ9V%2FwkgZwrQjI4Xu8IXBXXvtf%2Fz6JsnobB%2BIDaI%2BJYxYXxLBNuLLMoCxnU0wL9IOTMJyagyDHz4nBPVXhySuVu0VhIl3cDOd%2BGTDdXH2q5OcWkx%2BOEM%2FeLJVdTCOpIHLBjqkAVo9V4%2FGIPhHORXFV4HnipgnkMrPq9fL12OzQcpMuTNfaBE67hX1BS3JcDQSlgLbMvacsTSYK5xCi%2BCHml4H44yrd9KtKZsDFW0%2Bs8W0WQz9rkaBoUDCpfnjOwxmTaQxilb6jmV5t9cs526y1eG1xwz1%2BbzfkxykRHL2mCCXCFK4kiJ63LnGLTu%2BKXc6gEcXkGsdZs4i7DjH8bpk3JoQsuWe%2BzSd&X-Amz-Signature=5faf788a4e074aa8c6575a786733b8c1ee3073fe511b7274772b0fdc1f1a2cd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

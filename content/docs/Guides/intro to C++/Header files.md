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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPH2HI36%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVjsrQnTEGJZKWP4wZEIYqORFPxr20luorwnCUjfrThAIhAL1mscRnCuWl28TzlFhA4l%2FbeIdS3UBNF4afbLd0%2FARlKv8DCGIQABoMNjM3NDIzMTgzODA1IgwHyz2FKYk0vibTztMq3APN4lgudx%2BNzXoK8DA7Q5wwu%2BsIvn0QFqUHWJkV5SidPe9SzL1KNf9azarSQaZlBwPb3o1QWthV8X1kVpgVLoklR7jmjZPxiGyW5gLIBMI6Tb61ssWrWYMmoAOnmlb0D%2BqI4j7qGT9FFCIXYnxuK0dpjShqzEGAfc1UCJevy2Yg6VD4QRwgiv5rUZaZS6fmA8QNDwEBmZ92LybeNIxpMa8UVvVhQa5b9evY1pZFS9m0EHcY2VS8Jok56xWT5LtDxXd%2FJ6oAxP9RAndSzfKyvfiCDIUJESPaxSLpbALsV%2FcyAfhDmo5zP0qLBVoUyCeLUj9GjNJ9%2FoVLAItMb46bv25TKlFFvbdA%2B45RmZc3Yp%2FaSGay%2BMOKQIwzw%2Fb0NqPaBqhsmDe8gOkd7ziX%2B21KDo0BqZbS5dwpOMn91u7jejMz4Qrzkt13XDqOTBn3VcOFUKi1CJ6KZBUZtuXNE0TEYOlTYoKXvpyqhEZJVR02e%2FAqLKBFBI85E4eetx7QeysEUIvmRJjs0%2FVbR%2FkEn7mjAD7KoOKCuONalP2P20F3h%2BlJ8fOweycFfLHyluAyCJj4InOUr1yD8qGeAeutDTYFq0NhMWPUkm6mUERWJbWEYEVmVFTws%2BN3DzlHiwDuMDDi4LzKBjqkAXQXWfShzQyYK%2Bk30L%2Flyg9Ix0dqXmBM%2FgusDbshSCiMxsU7okX0FvD%2F2GPdVZE27%2BaM3gmVprjiyExSIpooKC1txXXc5D%2FrwJSeJPUY0jPKiQM3qXk%2BuNFwG6mdtz%2Fd63p0l1DIt9IM%2Fl4YULhwyBCW7XYqp3V1ucd06aAoOkHW5Du4r808aeVAkYbE7%2BpOUzZR3Rud8CwanKvxgAy93k%2BwsdiP&X-Amz-Signature=b390e1ca48695e58281e108978dea62c09a5508c190556eeb325fec060e38552&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

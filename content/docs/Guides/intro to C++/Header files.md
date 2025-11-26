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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEA7RI4V%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBt9aFOhlVWS9FVxwfKcLDXLzjUNUKqjxFjKn1z1rfMgIgVzE4dM7V8ldcCtM7AwsGJdvYSt31fs4L2E9XI8bPYzAq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDJNCEI2nt0WZb7oWSCrcA3YJV9nMX0cjxayZzlF6eMK9vi0eE%2FO3LXUNbhs2jJfG0JTB0Wc5m5S7MYjt2HXNTKes5d2Hl%2Bv9OkpsXarI%2BefnAfPTRjhkUzIqjdkj9X7So8ulwVOVD2eQjGdAiQtLoAwYPgoRjrHHkRLsVZ6GdFNlUVH0peinWyn%2BhrVjQVaBEkNEKHsVhf6pBdQO4rSTaV%2FIRq7Bcjzf1yeBI5SiRNjC6nZU7E7r6Mn4QVgvIX3VuWiBUaIWGWE4q59HrpDEQjAolOiyotV92xhnY4Pjuux2qg4PTITuV8oAVsR5zJyN8F%2B1KWmx6gfl%2BUokKOlgkxtuC%2FGRoYuDC3Q7zU%2BlzpUqQ38lJbNduCAVFn7njG6XzxNK%2BGShjlvDMjCRyyItPFXATVkjL4%2FwU2aTKlGc3d4Ng%2FoZU1SlDMh3O0d6D8dgs9MGHQvmJi%2BFh38UWERhJe%2F2gRhoRhYoYg8JlmyoULRtV6El9Ao0lwRVNUg3tVsfR%2FEplikopHWwgml3Sjh8Prrdf8oxWTWrB1bG7397DkIxmy0oWKJAU%2Bwq%2FNaVw5e8vZw8TvZWoa7xYMrPrx%2FsAE1%2BVcDFD14RR80hKPoiiY3h%2BKniy%2Bp%2FfwP8xmPxi0Czg80D%2FRoK6%2F9VLIsWMJGxmckGOqUBKz2vO1fDVJs12fDckLJtnFOxmVjBXPfqvn5LRzb7T8tTIoMNE9EsyIkgcCBud9hRLbJsChPLAwQ8aRwXNZRKmz%2BpkEGgEv0O85pDXPVz1dTggGWK72H2wJPEeQ3Jklh%2FKS1p9Db8BmJyA9fTDtErCXv397N9Tt%2FeSD%2BfrV99gzTtszY0Te2JbIhp2IQEoIEMiZQeA20TZmCXqDy%2FwXlQy0YN2X0V&X-Amz-Signature=f5ce9b9478e913f5cd71db64d8b07abc4e170fe6d6506033ad31d45cf8a28866&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

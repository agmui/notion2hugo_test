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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R257PXNN%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDSbRas0WhZSxQrT7tMkwPZZVOQZTDrPYyvuautHpAjYgIhAP9JNUnwyeJr%2FYltLKNLZDl0ZM%2FzpibAZ5NdcyH0vlQZKv8DCCEQABoMNjM3NDIzMTgzODA1IgzG6c0KNsw6ojTjkBoq3AMxLAKXXCIq9NFzh9Auiz%2BFQvlIGyxOSfjlA%2BFPdze9igpBd85%2BKcRRT2lPN%2BHcegZFKFmDbeJ5IxvTXTYXLEKw8x9eIT1xGFoWqc%2FwJdxbaa4oRbffYwSgiNy6uzxYLqmoX6xPrOnWmkltut1aQ3M1Z0nQ9CCxvC9O71o2HnekZ%2Bc4pR9x4nGzN%2BQdmD6defAzoGpTni79WD%2BWnpMEy3avlgEiD4g1D5dGv5DUWIfdb9lueMsR8P1s1Uf%2Fy6W730nvgpyR5gQrd2eASMovs%2BZBlTMX6BHW0bBZ8jn0K20FWbPTXj3ToQhC0ANknBs7R1tED0tyXQxVKiOGvB%2FG9%2BnTXxn5GtjrjR2kdHNgE2sC5QsbmYDe3YJWsg6M8aO0czln01Ts9Ro4wAOJMjjIlhxd5nUlqVDe35z3kL3HjpOubtJwq3iOCN0AdMSvuJdnoUfyCd5RpX%2Fn5tCH9RIAf7eNxkcpcdicXIMEQzNRbeUHLbJ5nc6cLlHDImXOm2EJzKuXb99M3zvLU4%2FS46yRhfMzqKKkyeGM3ngi2CvJ152xKVOH64vsD4E1ADiBb%2FVjPzRKVAvocUkAMRfhDZB2rZPPU9N69gZw%2F6zW%2B%2BCa85jgcTEE5drVHPOIvEFWETDQ7YPUBjqkAbKO46%2B4IWCrvwqeNl3uJk0%2FsSfrPMAD7Wxoec%2FuQ3wM90hby8dVIcDE06bd4CV6hEbsAgKWJmBgQJYofytbKNvZLxk4cynN2Qlrs%2FdhvmDb2OlJr9vrRi5VVOWxg7Rpn9YAathpaT5B94Kng%2BP0qhHOTh4nlwsXvX%2BvkJZGx0J2bwdQHA%2FyDK1RE%2Bx3JdohQub4bgJQqXzWhADRQfBBOQyuvOMe&X-Amz-Signature=733844314dffe1235f754fc5b4f780d8418d6deccfa8307f030a70b82170c0ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

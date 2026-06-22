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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQXHTSQ6%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIEGvKVvc%2B96055EEnKIomCOIdQewcConQfjbXfyQADucAiEA%2FSW1ie%2FEIkQIeiBgM0UMHsSi36P00f9%2BeNZU4xzYDcgqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPXkUxaxJV5hWCIHZSrcA%2BvnxLhq2hMyDmy3amh7V%2BkXtz9RJvhQFB1sWqBkKLqeY1JKBdVw%2BaP1zjePWKkgFI8kbq%2FeTAH3IpL4p3D9I%2FjieFj8sim6wruarppbkVx5Td%2FZt25o1SKKX3ec3250wDDeWDRuv7wvF%2Fd2bjiHD2IeVhyNGe5E71PWhUIhvBoKuQuWBQFxX7kjzT96tBmiUyiYQYf3Lbe%2FiVds1VhB9F3NkAHjetIKJKQQmFzSY93F8icd%2FwR%2FOL0HvpRjG%2Fr8FXJlbNpyfIYfmc5BOp2Dgbv27Ac4DWH%2Bl9%2FNAVzcy1MAZ9yjh%2BEnbuqHakEGbw7j3JpNH%2FLu2ibuxo5W56CLVYCFzrrWaG7soEkb5ZNgC7Qhjkayv8LAUor%2BStqEAe1qphKYoZ0NeT3mNPqtWhlFYVOnBvfIgaBegKPZBsTwfCYW2%2F8VwemnOyLAK4cCvy1ltfrWeVj9NVjPfwokMnR7LdHfZyJInsAq%2F1veBxBxNjz4gJ1IIvz4OZAAmphGASn9WBkrConl2zkVZz5ZNtVGI671lxGOzypKYznNKXHcsg3IwKNcmduDHhYZaMaw5oHi4%2BQHuWgqQz8Z3z2t1zwELmcugXL3lwGhny4tEUIGSi7NaxL2SWKY23ufj1wLMNbX4tEGOqUBuID12PMlV9dckt3jQLbcN4JU8R2IGqUL%2FBKUyYExlb9QHTSuuAxL9aNlkDmqW7Px%2B7kwc0z4UFGXGAD%2F%2F1z5xAigGPq7r%2FbtMcjg5TTi%2FO3DckOedN%2FnrLnBfQD5eRNX%2BvBTn89EEzhZDzn5QwM1ubIsME74lpwzaj0Y0C7VZXLqJgCeEe8yC2mLtah7rAzCzYZ8d3Rmus%2Bn1XBwwa%2Fyv7BptSZG&X-Amz-Signature=b95212cf2b9af3d56e715e21ca3a251c3482beffff801b345d817c5240a7e684&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

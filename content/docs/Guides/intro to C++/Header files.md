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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2LZKH3J%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICTfflDq8ivbLQUR55P%2BSIFsZOTPACoTW4si6IPGO%2FpnAiEA64A7yX39kQsC4YDaYPqhO7BYVTPUzEwYMd51mnElaZwqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAx4L%2BqnKdgrkcjbvCrcA5ymvzRUzjB4E9UnrZz5XYLa3Ti9Z5YEkSxOJZnx%2BIAL%2FQOUwldI1fnPiDq2XhGFFfug2wLiuiK7PAHBlR2OzDMzBp3I%2BppVBQaqoNWvzTaonNO%2BdRK2Wt7MLY4Y064G2EoU6RfYT57SgjKtWdcPjwTE0cRbNYkW3EkSmFuiD3xTOhFqBOsa2IWxpXSm09R4%2FvjwJHlneoxIcDFweqwC%2BW4%2FFiRs7kw%2FfbRxr0ZbiXmDkBZwAONxyJPhvt6v4%2FQAo4LjJALa%2FtCsKjpmxGmUckdAwYTt2hSPi1u2BzapiCN8j7i881pcFmC5YIv2rOoQUkR%2BaYL%2BG93Felpnx%2BcGSGJoCFhBEcEdL5GWX7FhbSrWFALOflh57xRj8thB9sVbYqJhMxnJ%2BrBYnCk0eAu6OYy6OpshbteMxme1aBkEbBbI%2FvWBNF4bYUuAIRV7RLwg9AjXbnY6cup%2BI80coaUaHy8TAPAZKcSc%2FD%2BUie%2FKdShjDqfUcKwGdLoEKp0LvnHw8v4j3Wy8wJhUyzCrqluxwIOZVJE6c8XvLK2D8yB5yPCAz3eZUNpz6f7nWMoyuO0pXLNd3WVHRWDcHlt%2BWcYLeRUE3%2BwSTVqW7XWT6Ny3zAOpqn0jPE11JOsQP2JaMNyezsUGOqUBRnvntPIu1oXdVYmyAW%2B5K3PfEfgHSIMVGRfjtgOYszHegKzPTvAGHsnQgJfGjvXShR3wIDfSsy4aivnlmqmMFBGiymolcBZmEjO4PRIxwVEUScwJZqiEHL3RUGuVfMJqEHYWo8KG20WOjK21TBJxPNgP0aNT7rkP8XDKIXQaomL%2F25V7I0qeQ9fUSyMPBYsatKUUJ3N9f4p7WPHBzQEnA99Kyqgh&X-Amz-Signature=b95b4d03167672e2e610beaae98962f33f3108fd383a414fbbe129abd964e8b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

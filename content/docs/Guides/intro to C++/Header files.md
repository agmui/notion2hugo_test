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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623V4V2GB%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7zsfxJ2kaUu%2FBal3sAd0RvAwn7kKF%2B8Pf9kEaFipoKAIhAO3o2pes2fWxn9dbnHcCmwGQ9KsHh8bbkeJj%2BqgQLaOGKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpiNqu4wRTkfSUxJUq3AOezAyXR5YYZ%2B9Wzn6UKW7OQndomrwFT4ahoj0k59jmtw6%2BWtqj5mkHhEUjPRCqImKqDk7%2B4QXRQATYtlOmOlRdZCSDskUU6g7WZAGButCzzwHY%2FwDS%2BgkzuWjh9bM2ub3jkavTFKIkrWgxoeBzdIEEfMMd2mcGmNp3cXajGcZ9f%2FoIUODOPkZbnioDalTqI6Ex7X1osV%2FkcuvBqOBT6c0%2BA1wjSs25PMGCAmqJlQIFxYicQwOrd%2BCCP8bt57V%2FWgM281HCTrZlC1sxqIgzZtOm7G%2BAtsgezzMAwFtfr9%2FMQGhnFfRMRrL0NzgkteAvgVqjWp8TgCKVARLAQdFk2diKBoILPFTnD1%2F%2BcPO8mytgF8xcLCUxcT6%2BzmbPrlH3y8nsMfkVxC%2BVmQKDRQr%2BZUcVFYFiek1mdKDJVgHwGrfbt7QPbbmqiIrlQomQgI7nLNrI8guaZTXU8MRfsYfPGNTsus%2FzcJyOtRDYPO6s2LQMOClUNFuTcW%2FlZhORGqtANNmuIfbCh4e0tywpHvXUIiRa%2BUQbvseBfIy9N%2FJnAstS7Mtb0FsY5hVmlZSVcIvp9sRqXxTfG6LXGDq8%2BaMVpRKUvY%2BdEw04YnSx0SZb0ZyPH3M6KRUkUWO1t2T1eDCn6qPJBjqkAUfUlZMe6PpF2usLHWBlwfLKAFwFHwxCqIzxCUz5PYWwHA9jBOY84jeWHY%2BnZsD4w0miI1UD%2BMcgGdjiygkUvwvJ4R5sQZUcrcX5KS%2Feu19hkNMn5l6GhSKJUrUvKrtMIklPknsSOxg2zx%2BEVsH1%2B3VVkjgnahricVRwa40jSru59r8ySYtfYAK4%2BIPNfahcmDORarhYbVVASgeBYBcrOKeSimy%2F&X-Amz-Signature=abe5bcdd1e6b76cd9169aa69e642b928c81a91563158088641728234aaaa5522&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

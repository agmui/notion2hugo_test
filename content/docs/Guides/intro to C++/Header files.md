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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TRIHVS4%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDffC42fEfrqSMcqRi5f8c2fmDqZOtF8hDM9vjue1gXyQIhAKWM%2B7pPpeP3bZ82K2YwfEAzzEJhT3VUtzM0%2Bnztb8nuKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXjgANrZT5via74iYq3AM2SNI%2BbhhXf%2F%2BLy7DrFfyfNvzwnf05EXySBfJfmnYcf1NKVDpZBoBL%2F5mQEJ0MzNidv50K62sh1IR3lD42hnxFtn6%2FTm0voUnKh57u%2Bnzgf%2BZb9mEEaTygRwpX5fUuhWDZW%2F%2Fft2QZuKGW3NM2ZuUiLVEXnjlceSLUeNFWCMgWuDBQG1eMUjeXj%2BUlUG5h3K5Wntps86dlvBhQ0wqj1T88L0uQATAxhEWhE65uo0c%2BohVZ7fkJhWPntsK6BKuqzDf6KHcCSK4PubOVKJPenXujDkRXIf8UxgcSBAoVVePzUO7KV%2Bdp%2FwcEiTOqP6flJPLCkSn1wNSIxI6ZSousbYU7LGeeU1T8ZUpj7YFchXzNUzbFjCbZtb6reYEzGDmqE6q5WR2jnlAb%2FgRZu8O2YVpQkObuzriSJwtdXaWqdNIFqKyoe1hK8B2a2kwak%2FNgf0Co5Yr3V2SKef1kmoF4Z%2Fp7k%2FXSvrH4bGKgHivDWZuvi5yWSsOw7M9QI%2BOye7Y%2FDhftvIj13N3UPVs0H5JiCKX477p4wh11drAfcp4%2BcpYrKOusQLk%2FIO7CGffJywxCH559z5x5glGGSjEmnp7KdIGl88VUauWymwtm7aGVInKc%2FoyP1GAWZ3svlWKuozCX5u7TBjqkATwveZLVyFbDQ4zUpwg6qw4DBZ%2BdZK8HFCLJE%2Ff8NUd24vQ6vWQ7Hvz49VCLV7Zo674nCNsMgNFfV1Q9cg2TFN8UJA4tb06ZEvKGYfznIL%2Fvzq5IXKAwMn6eLyYeakid5T6bkeCBLTrvsRlHlaY3fe1hfn4vkWb%2FnfOLndbpgMFzFtEsoSwsJzLmtGkSbOA%2Fm%2FimAnMfuqXHcZKG1B5sVQCrQMwc&X-Amz-Signature=432385c5892da6eb47d4bacce2026bb80b17e934567d012a1797632524c51618&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVYJVZXC%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMisaAMEBul%2FTKdphyb5%2Fm5Yf6lmdl9%2B4QMRaoTFtpmQIhAKvBfdJKbRWJtqx%2FLuU8De2k%2Bdka2Z0jlYynZ97QAZp0KogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy78OXT96zhpaRzIVwq3AN1pnMXroDlNGGq%2Fmz5cDS2HUhf1u3GCvVbbAW66VnxvYaVcctpM8aVzXHRXti0UTrP7S8aOY4mnqFG%2FiZLykyFCTIwwubqoBIEO%2F070sL8IEOP%2B5G1yHXafIy%2BB6kyhmvSqXrZ8RE5WwfJwXmFuHW7cVVfO%2FhlQbvJwmpQmM1WE5aEekzFq9irTqzMh47JZGuDNc990a2N82v%2BaN0RGtzVha4XXE41Mbqv0VMGP7dyaBcHMsP9dO92SP3SMTj76mynhdFbYYYm9GHVrAGSDSFtXM5nO5NjTnYM8VBBNQX0BJRvRHmOtlTFtaZEhAcqluUfz9ogl1MPCsUHUuDVfGuDTjyL%2FnwuyN0fK0ZjfokvwZewPXG63Nw3XDSgpmp5ajvbK7XUnCoDNluxdd7yx%2BZhUkfmja81C6sbXgOqvH1tEeIrS6T9hTTgTzzD%2FHVuomcHikEnM7STWgRIkRJHVHqOUKXSt%2Fc80K%2FEgh0fdcl6vBNLRu0JbjRXN3WLdaiJyIIXaxVp487lHzdUP0XiOyOJ6exWzfIyKZ8sebVZMeItc5YSElSpgHpgdAZYoG%2FYW%2FI77NL0L5oEnPV%2BgFnH5wsPge44KEd7qr7wYQxoS70gYWvy4ZIpw7zJjovRlDCG4qrTBjqkAUnOH73G1ylJT4OH6FsLbLoTq38WwfYJaTYer5W4gKxxVeJGtT4ww6k2pbML9aFkt0PdUgII0%2BQxv%2B5HJRAliJPrnWauBK3XbPWKC75uu1kffAbgjWQb9JflmIxy0mrc%2F2MoTQV7P%2B5cdIfXz7amVGozXRxC9ubXFtWPkgz5XNnpqNU2UF30IEJUC7ywLNoTw0CFvu35wYZpCnbwDReuD0EpSPcK&X-Amz-Signature=9f9796b24eabde3c3664343cfc3cdaa7e003d44e7e2cba28312b034ba506c12d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

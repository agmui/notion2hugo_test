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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5YM3TU3%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDQwM69UqIiZsp7gGkLz%2F%2FFaMk5pz%2B%2BhZ3len5Temv4TAIhALknFCedwJbJsLeYQBSimES4E4FRTJXeuoCG%2FpXUdm1LKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQfdn9uu2xnLESfn4q3ANqz0hQG8bClJvcyWZZflslSKOjSQ0k%2FS%2F3HDw%2FHDq0g93%2B7lHHCkukgxYd3MIm6Pq1nmcHGaQbVMI7h087NPsaop5AKOIc23xp0EBNKSJvCxcYV2YhvE5IaYcvnNDvHdsojXV7PPFm2NvTbjBvrt30twQ3F%2Fqsh%2FYEHyTJ8nojM0g6Uktsx5B9XIVDVqRQUSwq2JzZ6K4660kjWGUU%2Bv4QIMy%2BO0WbjwX7P8lAWZ%2F1oSB6t%2BwGwQl6hnpvHlrn4I5EVxgcaVUaZlHsUdBMgBBbyqznHfGBKl0ee8Ta4oqZRbHMhk8TWvoS%2FYeM%2BqwoVcTQr8awDtB2go%2FUGBy7rgSYlnpFVa5yV3OZUs6gm0wqethO5dZlN3BSIn7NG5Al0wbB8q55q8YtLyBrD9hKbo6O8om%2BYKd%2Fszybzck7O7AP6GBpTcOi4Q4Pym2PUqfLFbq3uJXN2UGkLGtOgpcfUod6ZPWZHa0TQhm%2Bhwb7oADA7UNSOdOnSBa32tkG3Sn%2Bepmwp2tD3nD8tQvdzTBtwQ9glHmuKQHCUM4%2FSWFTvJL2f1u8kt8dzIw4uk6xn378lZkrMseVghmLaWRDkqR0DCWXaB3%2FMHdLqZ1H6ucD91jjmNM4rZsq8egScOnv6zDb8v3FBjqkAUUG%2B%2BXA8fRU6Z4JT39tkUBUUrp3FXhfYzsEDGB6vKS2uMfQbSjorhVVtRYpy6DJgXleEMPTAG2PVglBvjacqfIS3fySxSQ8cLVsbEO2V%2F%2Fj0CAn3FVkaY6ivAvVf0rQgWlMtVXylgoEwQDbkn88OW7Wx63c1FdrO4t41XLdoljLU9n2kqTMpeP8tjHpHQEHEBiVYBbjnTPyfUoPLUV5ZAWyr3DD&X-Amz-Signature=6abc5fbc1576e836a7b8b873caa5b88d847d3b863ccce58a68016da6cc2b1fc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4UONJLX%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDQEbbwRzIl60xr9HNjMHD7fJTls55ARX8ig6G0VppQLwIgOlWOK%2FdEp%2FlUPj%2Fi4mfEB%2Fq32BIglXHz2NcLkIY6dQ4q%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDMAmXthOOhOnXikmxyrcA%2BkuHz0%2BzzINP4Brr5nxTFvTjqHwcmuCbHo0lFN8cW%2F%2FoW7DBlWd4vZbMkpMGOnlZhRvhqrP64z2zpV%2Bdk1lQO3oRqM8G31B1CEShI93oSYu%2Bh9DsC2jrqZ9oieHqEP0ET76M3uhZEZ2AuAnsJ0QbqUnzJQ9ave9Iw%2BBw38voq6Tzp%2FL7ID1KRQsTvpoD%2BHW3m4Fgl8bFKFJGEoRyP4baP33wNZkuddfl8R5px0yYAPI9N4sHF6Uc8u49u8DoprBTr2lQYnsIB5v16AIocEiuXfpyLhSr6yruHTqSXnWgDPddED6EhG%2FD2il%2BYuznldp8YeR2uKPKPyuYaJ96aKyMLAFR8JMwDa6cqbFcCg%2BnSO5nSl0zq%2FfD%2FkpNXi7a4tvV2hDG0KP5SUMEBk50x3fXJH8aBtwRH0ciqiPHRYLnxKEh2uObHBogXsy9NqQT1oC4keDd08SaqjhOtYZAIVp68Wkqnzsc8LzOsQMwbzjR9pjrgXtNatOWdLsreY%2FPIAAisBpIu%2BTDSWxEH%2F4xc2f0gbhvnDdibWGwqdZVNp%2B%2Fh3rzbEkxbkZ5ddF9Y%2FGk9ht6VErO7glOLqnX5l8HJVw7ZutcgFhVnmQOiUGZvHUVTT3YdGtjbXsADVktUboMImA%2F8gGOqUBPPlsQqRfyYPwJXGBk3POkLdifEWspo77vUiKHkH1U51HGfX1VWZBl9MKED2pH9v9%2F2KBEzh12pWF5N9AzE2fUQbagMJwTtEeTcVEC%2FOghQKPO7XBKlv9XcOR1EZVK2L8WxBxzK9njDdD4WDT4W429yEcfWp2rt8iL6Frz6KfrBGH1QGpUETYe82BBraXoEJlh8%2BCHg4dJvadrzvGFnMOeG4wcMsD&X-Amz-Signature=bf9a12a1b39cf938783f44be5a40129c1ee0bc50c56b234e9de78109e0aa66e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

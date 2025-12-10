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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMFGWANC%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJoqapfxdzKbSx0FnPSRLzWbOmPQzmiqt6hCArP4fIiAiEA9af6x3GZO%2FfC8p1MxCOSxhWDXkdi9Z6lfBJmrtKUqBsqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD5Dc59c6HYTYbZzcCrcA8iZpz8EYSkTkaVL7cvsWMl%2Byf66dnHvNkufRXO4itb%2Fx3At5g%2F6ZzyJQXQ%2FXPZs9ahua%2BJuXlsH1K%2BT0X2loLhZL1ws9T6emCPB5tXZHwBDoh8thvxYakEtC%2FPhwHF%2FSQOiR%2BR6c8y0dN0x9JNCflr6iscvI%2BwsD3Yj%2BqIO%2B%2FdJiTq7LDv7NG44okXrnF92066Frn6lM25df7DJNJuHv7POdKxHgPuTf1cMb%2FgT9SG7aqpZ1ySeg8nijSxiJcQuTe1455IHeP3nQ7jRquN8bULuraAFGtQ3B13M4Zu2PGnjVLF%2Bn1taBSyfB1Bz58IF%2BZlaZ31Fq3duIIhQHpMz6wOBmokYxBOHotXCsvvkq8dfihoVs2lVx7CNXP8PcJoBeqRt1GlxEZbURFAqH%2BHvXrTf0A5X%2F8JlIaS7fLrgJK2N%2FrK8wBv0HTFaccxeHIKVow2ORUjKkH4MeGSXQDnIZwGoGxUtfSckvBAjT8MlaEQjl6oL7aOCaotCO%2BBh5YsbJmV%2B6l5B6dSuJvWheZR066WkyhheL5BSYP86lcYpBU8xcB8AMXJ51Cqvv%2BgZkA0g%2BKdPNnJQB8blG%2FrFVMbz9U71uYFlhNVmLYjTW4CHs45nxYXK6yTJs0jl3HnhMJzE4skGOqUBw8V%2Fxlz1QHzCy8Lw5a4OOM3K9nERvnWxevkv%2BSuUONthVd763LuxB2V3HIj23Nfy9kpQo9JqA1Mnx%2BVtEjeawb%2BH9%2B3T29%2FzzAqSRm%2BgicfFqPdlT%2Bo3frmM36gXHgzNpB9%2B2xOndSk5eIh6ODU7f6WdRwX06wg022m%2FQ%2BMU6cR2wgzuAMMhWnSjJvfOZAx7P%2Fgvsamtpza4IF%2Fx6vuIBDUnvB6m&X-Amz-Signature=78837b3ff9a3b37944b550a3c4f430f1fa73d80f4a576840b6512dfc13dd9636&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

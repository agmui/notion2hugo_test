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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJEYKQXF%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQC58JHV%2FGg4bA8JW6hIKw2TCx%2FLENuzOjr2jtCDbxHIbgIgYDAXB6DGuYwcJXjXLAoj9oigG0hlioal3DlV6y5v%2FBEq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDIvdrVzoFjE%2FtFjYKircA8dxoSP%2F2n9xntOEUvd7d%2FZZuEfr0Deb1DkY1CrH8RCAowWH5x5SCXtRddUEYIuunCF5QzkifBhpKnwn66v90LzM99BUw3Vs%2BqXYEIzV%2BYjOMstPDXwUdDaxPBXtoPWBJGEdJCRY0NkdFPO%2BHu%2FOYd2BBXHd8F9UX6%2FT3u5dRF1ME2El58qIwxUiaFWI%2FRxrHE2kVARu4MHo%2BsJvBe4PR7Y89jATQFylYEe0liQ7nM0zbDNaw8NUbhnaYzmdeWZ5JrfsVatLM1FwO1lWyzgcaDsbZyreYj4eypQJVABRFntR6XlPfRxWwfpIAy1V7yVRNPzp5z%2FgvF0fGG%2B3XVq2j%2FZ9ZindA8R6vE459VYCN6FPCDWtZcj%2BUgUmPKySixcgHyxmop3SYxKrLgh5SUkz9KK0%2BBLl9bmtMkS0%2FBNNwwO2bfC1sw7mARjLdOEpDS4mZdnFWrDs38%2B548KLGSZAf9cULG6Mamy8gF%2BvgFJm7D41zQiJrob42P%2FkgbcjHnlQWp0hhrDlAok6DPx4diSs4Ww%2B3MF%2B2%2B974qv0ghQ9lOKCtVqGNBH0TD5NK%2FnAbdZ%2FGqZfqAZBVgKPjnnK5Yw%2Fop%2BGLRN2KTd0Y5uRCxDYaEpTNr%2BkE13GVdtWxpSmMJzZptIGOqUBHd1aqqhOonLKQ8E5ah7xGNvOsntaTeoygtAsDdYOHXySfGSivvZyRp4U%2Ff1px2iSLrhxRBhpEbaLXmzqSuc9COX%2BtTveM8nmVKD318FIJ63Jr%2BfE%2BZM0PzyoJchkfWRXw%2BmOlPzJwgjra7TA7nqFIZpVqppEo8mMPeSkX4lQx67dC%2BBGAZzj1gaD1wrdh9I2bRROXlQANyZoTvNBaI2tJ91d4ELV&X-Amz-Signature=0a988cbac4b0e437e676db392eb130949ae1381abc84503de36082be439d97b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

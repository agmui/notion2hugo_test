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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMG4YHJ4%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB84tPca4fst4xgqrBFMPPtdQSP44D%2BbeeqZnuXC8XboAiBf1f87xisNfqQiry6MKAuQMKmBQtOZEmqWvSmD0Nq2OyqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkDzcnvSoiDIP39oQKtwDar6%2BGzkxagriVz66gxVBx%2Bna4BXxE2fPSv8TEMsnvY7MD5omu%2BglJ%2BnqOc7uyeBC5ilBooRKnlWqfON3u7DFiTV%2Bq5TXh%2BHNWXq9Bm0bcyO6diQKPe1GKj3mnRk4CqSiomZVwWR8aEQtt0XAOwYnxabsRioq%2FK3aiqjnlHh7g74MDJLRI29urQUZBvIQKsaUyXWGFkPK1gpRUA7aTMvesL12WFvDagSS5ByobhoYCZVPX8p%2B%2BRtdpuMQzL8k%2BiTdVz00VgiF9hnYLB4P2eKXyYdA5Wpyp0KKA5ghPvsouE1XIt069jSKCJmp27F%2F5mS765XqpNeaYVKNiXm4a87Oy7aNWg6kJkS0veO0tWwDRtq5wS8WTs6TCcaInDtl8beS3URqcTxXN74I9SQV2RXuLunZk89G7LLAEbawV04OunGD7dOI24hfm8yR%2B%2B2dhyfYmXsrCneyiGFiHjrufk%2Fz7OOk9Z1rOyfujYcAX2EUoJZvvnsq%2B3y0Cb3b%2BEBpggI5GjwE9r3eLU2RRa69dwjY9PtN%2Bjfa%2B7mvCHRSZ8IUPvQ9tBlTv%2Bv3GEZ8PjKfIy3Y2ZD%2Fn00VQ0sRT433MK4vvFIimS4D60sQSjtJbsQQsuy43tpohz8SqnnsaRIw8LHN0QY6pgGmq9BIGFGR1lSCw5yiYKfCZSOnT0G4rrJHwUC9UPGK6%2Bj1aLGYXHTRbKGiwUL8bRcT4osEYT9C7CMKd8arixDpb6ZXRkdTBc0tPQBuE1uMZQnEzi6E6EX4M0P9FLgMgJ0rSESh1HW3pXLkwfwa94d%2F%2Bbwp7AY5ADvXWkgQz4ZKZnHzKlO2HbGUHxIDJmHPAhDezkMAczyBHB7AczhYOvXSkJ7Ty5%2FN&X-Amz-Signature=701bc65aaf1b1b2449598b5f3611ee7f9d11722079bfa779e1f90facdca37242&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

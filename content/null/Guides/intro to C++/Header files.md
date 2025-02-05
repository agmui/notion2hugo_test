---
sys:
  pageId: "790d67e8-cdf4-4955-a0c2-ca740556451a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-07-08T23:43:00.000Z"
  propFilepath: "null/Guides/intro to C++/Header files.md"
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
      <summary>Why do we do this??</summary>
      In C++ we can’t use a function until we have defined it
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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVZQ3G45%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T050808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIGqpW8J939oprtB30e84FipgPjhvmmplIVcpW39cCRvmAiEAmKtCqLdvIqBbkll1qnkK7k7MgGi6oaWzve2Y%2F5Y8XSwq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDKU2pM%2FneMEkaX45WyrcAwpFOYKwKHzXuKTgNRZes%2Bvq90htg69SJefPGRUX%2FOpZRWu4AH9lURX0bO8EmPqtZefl59aN0rzR8vHZj57Is%2FBrK7VCwv9qGV2K9SOFRBNzwGQkeEEK6IqJ2IwoCnAbMRqKk13kwbA%2FbJo9t7DcpagzccStpOiVX0zAdrI%2BYHY5E3rwnVkT765Cs4vpuLxxJUVSD9wQJK5aH2Zj8P1K5D3r7I7%2FnwZ45S%2FH%2Bx2vjB5mSCnfLkity0dqO0jsozEfo35hkPBRg4PVvACRB%2Bo96%2FRRSX9IippeSp5ObHr2zx%2B2SwAqxk0aUWOC4R1uq76lUkex%2F4T0hXdlGF1%2BPkJ1zS7xdn3ywrT3Xl%2FbwZht3e7Gp1SJNgCljfcql7bpyAXFuEgqNr66BjOFIo0jqjmcHG7rB3kB2yI2AjSdjyHlhmMJkyA%2FmWvdDvoRoPkPEYRYgO8fwUrxnzef%2FnYdhA%2FhhUawGIH3x48fOsgQdAmT9Z8H1QnC%2BRpvs9OAihIK1pvaW6qCv6ekBzHVfTKNpf82JPkCywBz%2F3JLJz1Cx3cUwMwUurB63llGxetgSjboghFcfHfol5zPwIgDvddPzXLaJ5vK8KDsi7UeVpp1XailxX%2BWugg8HonOHFzWqP%2B0ML7fi70GOqUBRDZZAVt%2BARCgzkzN84%2FpzVGLNCsrmEx%2F0buQGAJsxcjY8HG6dFy9oGlxEblnhrrjWY58%2B2myhP1DHz8C7dFakGdoSU8ijADrWmBaG8EfCOIfPkBMecLtbeKlmslC%2FaJmcAy%2BeWYHFIvZF7a1TuDX3AxiajTZWFu47lWoY9gb43o0krKdCTVUKv1JSxUvvZBmjJLbAGNEsUImBFnLJ25OvEtVZPil&X-Amz-Signature=29fe73780961c8b5ac894516607a89e8b12e3ef62451c4614034ce45b2e57c8a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLJT74ES%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T021607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAqu53JCQ2VMKosrfAiSHW7ssUSH1LFf8cTlX8UK3MCdAiEA0zPAKi7zUZs4Bo56zGXS4ij6%2F%2BuraJuP9MigZ0uGiK8q%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDBHvWjxRgZ2RIIhoeCrcA2%2BKpn2KM83xe%2FknAo%2FF8vc17mH4IebQYGcmdC6AFRn5Z27kPnd%2Be9gg2RsCTwYjfmVknpODjVzwQVT%2B17bNKMQc2geknOh7VWNJMaJ3PQdvgCdRv7ITKA2CYwJns3ZNXbvAvUk8X7SbBQJ7I1LD5qw6RyZ6RIXTrde2LiE0CS5YNepoG1z3%2BqZw4uo5z9KQYjlC1QhYKFEs%2Bnn0xki6FChF23CS4i9R9cqKm7SqUlPlI3Iat8RSLekBgu95ELJriu%2F5yfv21A%2BE39kEqkchN%2F680VbcngpsZfq1j9JiBsvm9iFG%2F1IQjGqbi39hRlAMZ9JWsMYl0bE0m%2FeUdkk1%2FseNPvWMzw2ioyvvDwZRVa5XknjBrvU8gAPZ2rlHdRqIggxVTXdyEHg9v5uX3BCSBlsANxLR9d62liypZt0LfbmZnzlxB9NRuu%2F%2BgbSzoAykKs6ftyC1qdXmrj2So4gvtul8vxTDbyV0XevT4QhxzFbAyMWnkxPgnzDfC8nhZNW3BBuAYAigZN51krLSaIH4Iuu3cJPUSQfoUnyITRDJlwSJS1Q4J1OqBThUPrHepC1FQDM7h7sft8dVA9n43ERIuyK1TFNKOA5j8MSzBEBWleAJGgwDkzIcxXypOJY7MLmiwr8GOqUBlzW4AusgPv1KtMnYiFnJfy0%2F251g3y%2B2euzA5txMeY4yhLQuc%2BbslNVt%2BH88yck0g%2FxiuRH1YwWRbJIJ0Od6HnA%2B%2BjCL5BRGO2FyJ6XwFJlgY8i9T35QXbh5dxNaLjWg3vcNDDDM9GnS6cb624DYQuSd8dMC%2BhL8UrjbzqghL3MzLt%2FFiR2MHgYKc5DlVBMlMWwgKyVNtLt7d9SiYsHhr%2F9Arf7D&X-Amz-Signature=b98a814e92055cf549a722bfa514761b620321cc98b547524537a64fe3af8d51&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQY4QYPG%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T110306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXvmayZQ4%2FwvRNbBvacI20AqF7QOr%2BilVYrlJCBEMIHgIhALx5%2BXewkYwg3vVTpKTwp4mxQPEpFIQnxwd%2FZtTy6XdkKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxhtJv4YjrWvKz95HYq3ANMol9PZ7qDdWp5bqm1AU4fLOmEINTFzAj8aNvUXPSjsd3JCeEvow2muoFPLJ3IlBEvl8OKt%2FHbeK7c62T0NORQDhKOEk7f1f5CjGX%2FO0cXhuuJGt%2F6zWCvqzCzGKdf4KkNFhSARkjeECYTivbj8LxMtsPBrCmutAuQ3n4pz7TR%2BhUUp0eKgde9G9YsZbNHxg0T0k%2FH4GWdHj0Xv8xS2zuaaqR2fRTtfDwZyM33%2B6H9tWXmTOGkwaKgl%2FMV82JeCEuDAxY7urQNybue206%2BvNTRmlP4rJdL35l2AUTLHXv6uePoH4IyYTzl1pLRsQOINQYqGkA043JpvboQb9Tbj3aCX0WHcFqBFa0Z8baHYXuu0snkT%2B5jdPZaizwUrOwSVOmBl4nWkO%2FL%2F4X7Aauf7CvZY03DHjzP3O0AT6cQMlrACyGwOBHW9mY5S2R3SS5s6SCacOuOYGy7oy0xw%2F%2FHrHjtyP63PYSLL%2BpLTVdqiD%2F8iZywmTbQNHoZ3uYMpQu5ogoatscxjwva0RAAx53k%2FKw7iZpYBi6WXYxtgFq4C1rIYAk%2BQ5UYRflMaikPv7sgUE1ZalSoozMsJQqaLTrPqU9wUBV%2FROU%2B%2B0smOXUmsAe2MCe%2By64qfoVp6Bs0tTDZ0qy9BjqkAaf78PWwc87wYAJOkmpGjmHHct%2FFKni7qMkoRjGT5h0xcKE0RDPhRvO%2BBdasxJC7bfzLLdLQ1F9O936%2FSF848YW5ZGwKIZR0%2Fv0NSu5P7Q47wNm7Yoq8QnpFP87hRcTeFSQ2PZK4HXBmksKys7a1EU%2Fn92d2bVIbDnvtCm6nvoQ8xZ9S1cIi7hg%2FpOb6WR9Jn8xzVl6kn79qhEhODE5p5wXImeuA&X-Amz-Signature=d98b150019630f9e3402dce4f9364e987a47500ff0c6a2103b5ca2a935aab54e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

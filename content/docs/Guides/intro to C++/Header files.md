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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZFHUWT2%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T061304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIA9AMSzA8nKGRhms1ZZx4bgVeqAUsvrhCbW9fqcJjXhbAiBMLsd%2B9UQJHgWi0yecjjJNw4%2FLDC%2FNOyb3leY5VX4NBir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMz3CN02WHFHD449HXKtwDjKu4UU0V19H44ABa2%2FhMjo9bL9UmLle0B6TqcjdA6YGu4qlHFhpL1L%2BbdIWM%2Bm%2ByiSqGJHiVUdtO7ngO0ZmKG9qx0W5oJzbQ%2FWw3DqtqFiBTBzE2Twl5xk5oOJufvNpOm6XqSaKfOwCg7CK4iW3zXaBk0UB24INZgw1nlNZnSJxJ8P5PneOBsNcCNrOLUmiRWRL%2B2P6nRq%2FYv1gVQoyVb0ZN9M2JOOTrjGH5IBEFLtFj3C%2FUe32maUf9P6M4KXiJbCs1nNaeky92z3Kej%2BsuxQ74oqi7ha1YZmCGhpLOBpw0C7aer9a8OHkHTSRricULfkdwrRUf5UK36WNDrcGxDtYxmfnDrjr0oIH7jmjz2EdCUqYZLP58i43FvghHLOlp9Rr0RTiql7BnJUyRCXwCxUH%2BN1hE%2FLdA9DYOFoQp21ba274ryQYo4ZxbIcbqfgud9ex8NOkUCnwx2qEGutHFDrkhISXbj%2FQvyUuG%2Bap6uaKo%2FVjcLBaFdM0Bb0ZE%2FZsHTN1UCAWgD8nhsMqO5eeoFvGSlloz3E%2FOg5FN1D2qGU1UV%2FTJESDLg7ukyng90HyeO4Mjm0Zm16c98hWlqfFYOLE2WTz4Kr3a8umaUSjzYev7Rq8LXSeBoKt32VUwtISWwQY6pgE460dLg1ytriL3WbXse30%2Fz8oeP%2BTU0Jrimn4wu8eMAAYMKSkTTW0JWCF13We%2B2emMiF1gCluVI1v4F4sWMov95lhSTHTOJFM8N%2B9QfCZd0h7ud9dU7yftzJoW5ed8PCehKYYdBRdCgHGg9BIqreYpw5Nqj89YQ7dDbgu%2BLmxPoSYQac4rWPy0qy7tBlRIl6KeIwxzmBB3B8UtWdhlLtfpzL9bNn2f&X-Amz-Signature=b793d2ce2109ff67bf98de330dc7a755c9a994632533fa985b166a82d2257373&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

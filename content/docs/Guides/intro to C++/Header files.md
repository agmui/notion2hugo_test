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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQZX6DR6%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T081153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDdGHnKmMlh0xY7dvk98FoBlqrvmq0bkWpfSTZeoDeyEwIhAPLDsPhU0BXFmOdXxE99j8WqtjWXmQhIAdzmpSU1d1A8Kv8DCHEQABoMNjM3NDIzMTgzODA1IgyaMa%2BhnsAaiZe8Aygq3AMwxVdsQ1HEy7yg%2FPdKpAr1kSYFqKq5zQCJzDnunCHWQa%2BNzT%2FGy6iQFuod%2F%2BI6Otp0nLB%2Bobi75%2FyX7dtvy7JaSDHv5q6qcehoNG3RVSNA%2BgbMSph7ZAq8cPjPXtmWCTeJCSUfPu6oyvhVfp1FLXBNQWq8%2BhKrUVhJbVURX5mEShua9Y1TNZAEgjuGtWLfKNYMHHgxx6%2BHO5ACKatwoqEBYq1Cv%2BAkERz4%2FzTksuFcpqou2mg9mldbD7fCxMs4OaqqPYzdK2mvw%2FebE61NOigk5eKvZeCYuRhVVM7UFvzlCQ%2B09%2F52EWmY5g3UtMkZ5RP%2F%2B%2FrCqxSYdruEKuvmeEc%2F4nDQ2uJpu1f%2FkeoZzVPmQl%2BJFHVUdebWiLqxtHZMSVDW%2B3Z4%2FAMfAwrFuWcwCqqqN%2FIOEm2qVuu1OwWQF9PPbaK3zWWK0zEtllxe%2BEzxHnWZVxroIcPCNE6DefwYHQccUZcaqpPqqroo5yhdGoYsB7prjvQyGomYB3ys6C9lStRV0qBnPCwAqCNm%2FbQMaE7VoDC9nb9%2BpfnAF%2BOqo%2BiQvr5m4iOeWpmP%2FsObUhLOw9tBO5eUWnbKe00Ftz%2FWq%2FxdUUxtc78lOpBA2b%2FLhKiKTk7xGaIy4o%2B39pEuSTCvzsu9BjqkATc4tNO6vCjLeIB9X9lY%2Bm1x7c6F%2F4BYHAWRKgdgD0xsA41iHM44ngR%2FBffW7Qimln8RxDLWPQoQQVkqDch1OOke0eaLnghpzdwolcvG%2BF7Fd9i75BuvnfGZW5JFiC95S8MdjU7X10aBXtHoCsm5Ea3WBhHbxrLX6%2F9j8maCtCMjV%2FTdlJaU6uyNahj%2B%2FEs3GM7Wl%2BH9bt8RqhrJfy7cQYBdJxHA&X-Amz-Signature=554a0ee510a05678c8eca7e543f860e584a252d47cf34d0a75801e2b6751ea12&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666E5GKLBI%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T210820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCCDnteVYQUW1s%2BrVfpW8nqC%2FPnR5AcWATxbHJzNwez0AIgDelac8HhDQGkRMqssv8cZXvWXuJNgyWn2zCCYS7rqPEq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDL%2BulQHwQP1U6O4luircAzuuJ1E6sJ3%2FIITqvAuZbyxJJtB2GDeEOjOFwokhTxkcDfTqHAEhWMNMWRAwvKinRzqaKc26rYV9aoodkd41s5zOpcKLd1v5vrl8Ycqby46GGAjQKCmd06quURCP%2BcnUrGkyLBuk%2FXjo4w5fqWRNb2q3Y7%2FAHFD1na3Bj2NH%2FkB%2FiH7uZaSQMcQZWJqkZ20k7EWDd0t63wqj28071rYnjoq%2Bhy3jyT8CQj6IKHhVy8R5oALwkD1cB4IGsVL4KwVP%2FzxCIGB4ACpOYc8LyhuDsrM8r47OZvPqoxU6ZWwDTQKhgpVWf9VZ%2BKWFBDvlDODB8xWe%2F4zuRAY2Ll58WVvDkClV9Zp3fJ9xw8758DMP9rzShV0sa1h7lfxtEbm1NmLOenX1o63BLyMuANBv37dar6GOw8fes7brny0pM0freNjwoITZKUzRuMbTzua5Q%2FnPA07ZBUf6G28z2Qv6TuWUfQph5YW%2FTcVQZ9ZgfQxubs6Y72%2B3XaFdVdKySxMjkjyB4DD5abqzxB%2B3ihTwTyx%2BtvqLmBid8ygzZAFPjDkpq5BeY%2Fp%2BxWw9zwRsu93BvueXnrnnOJIX6ps4O4FF%2Fw8xSh3MyLg%2FfNRRmlxT4jGzv0R1kwJv8kxE6nsWKdsAMJLRj8QGOqUBacDHo2GA9ANiiFok8XCNb037HdIakWovRinG8Fx9DWycIVfyEzEUP1sNkxQdkmBz%2FvfCnOB7XMsLxSEs53dEgqyjrR3xXi%2FGwt8mJR%2BrNI5EVCbKlXB8cAA%2FVMAC%2B%2BTOu1Y9mhJ2WntAWzwzDt%2Bi%2BoMITHY%2F4BDYx3VUfBAwv5Xn9efWkDKwEQNDNtg%2F4HhSsedeyC87oWHaMQmmrriXmVSd8whH&X-Amz-Signature=239ff0aa444090ccfe7f5d104954c9d7c683a6ae14315455f043cfe1df6e0b6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

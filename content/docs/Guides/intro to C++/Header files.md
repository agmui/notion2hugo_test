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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRQECW65%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T032118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDwTf05Jnk5fEZAwL6YTJN6SjxqZIuJI1CjipvSwTKHjwIhAM0wzlfiW3XAlScDTfOXYGBF7eHonp0e%2B0rFBZyUqxP3KogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkE6yZfrVfKp5mERMq3AN%2FGiBECTlwcmbEpVInByBle7Ry7tJFpSPKV1nqtqF4bZW7kIBKPKsTdsgm6S%2FWRy3ePKvZlYEUciL4DDsS%2BwtW%2BdSX%2BlUCfLyjGswFBETHk0R5JDUPfuNG1VVMAzH%2BaDul8RzVp334s%2BVrwI0P6s7%2BuGsuD0eLg34idCR5rPRvmG4M8nqUCJLHKsc1CJhptaEnR%2FMc1RyQarhi68yGwOCTm4CBu6TbEBFwMV6YZPYlVlPO%2BsZH8cGKQy5lU2eqt8vyubY3pVhReKMk1FBSpoMsj0P%2Bmt%2BhgqBwE3O68jLq6YIl8CgSdI6WNkznF89KIyPLE0S%2F6Q2gwh605PPrDUXPiixEoeY5AiFO19jH8240Ie6bT%2B3IW4%2BAuz1auvugUU%2BvlSAlSzr4Q4TQyYtG1RaQLjdfc8ApO13%2BIGyW%2F1jQ5qO9%2BQtR6wwFDCU0uEtLALSpqv8Q5EzE5Qul2zvqOTnZGKsgFVzBtXLZybkcz1pC1xFWuU%2FJb0xLDej%2B5gVwffvFREBzOS52JLarqIvkdSjzk6UOoBE1l8eH%2FEIZNQQrmMJgM6XLfzGJpeC4J1Trq4bbV%2Fz0FJ8bOd6ItVQxFETI%2FXA1ZLte6xA6tWeD6kVhF1OinYGuHNYXCS%2FL0jCFzfi%2BBjqkAZ6%2FSJ6j%2BGwHe8pGH9zeSzrbJLzrjM5RSKgEFg0YsRkhCXCvEXvscTCWbz71eAu%2FMXPrTieAipkvA%2Ftqy5IJwA0NcXp6DrhHa5c2pbEtCcgeQ%2BkUTg8Wj1ewF%2BjX6%2B%2FSPJIokPa71MHtnwKPeQWca%2BxpzsbBvR%2BNhsCIgApdtUWXtfLDj7%2BQJEs5rMHpiNYp4lVYGD1gHF7bYf6b6dcW3Bgh4MjO&X-Amz-Signature=cc72db227eed5b9ced2b2df1deaddc7fa9e29eff19c7ed2fe3ce6b13b1bb8338&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

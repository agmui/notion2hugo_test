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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2ANMOM2%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T121317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGSgStijHz9rTB1%2BQQVuEhQgP53H8jlY341Gh6xdxZPgIhAPtzgVQrqlMueNmAjCaYQB50uOAZCo%2BFJGp%2BMaKKd7jFKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwGaVzOZmZg3QYs%2F34q3AP3zgK%2BYjdzlNyqRJ909kXZbeFBhYx0IK%2BkzgCKp0k5wmoiBhrBSb4fbuJUmSpeDPnft1c5HdFsN7S2KCxpPmhb%2Fy60qUkksm01JqkOOo7rNGRxfnyzv2M9mFJrrixYkrGcOcI79jEEH1UKC5LBoWg7wo88eMSVy0KgnwtPIAAkRVeysIGk6HRAO93ChK%2FcTj1nUoZkhach96yxgzDaPs%2Bk3ZFAAMi9n08PsixUge%2FzZfVGf0Dw1ef%2BUHxOMK1q2MD5bh31l9DHoziol4ZhpxSfkOBfUSwlb7%2BqjiF7FU6V4%2FsZwAe7rlnEMy9By5mOxXiZO4raN2Oi5h%2FiLPYRp1vwQru0L1vxdn7bAhytlnNOYaTD1FB9M%2FESBgAnVFdT4od4DkZdkzreHgSZx6NFfxaOQ%2F3dQNEVoBsFOoKrFhlqza7yw7TCdM3yiwFTBfUHazqm%2FW%2Fnn0ILXJadc8IY17l3gJq3u%2Fs8J1n2JXLj%2FpAOZPkIyYvVh3Wr6%2FZQZ8OrmEFnWnnKkWTIiNvtI0xSpnSFc9nU53KJRvQ4l2LUjW1PGjjypKv8y%2FY42zB%2BYp6pahDtwCaDxcBk92IhtiI7Z5Mr%2Fk9xBVoCVIEBtdRZTz%2BliYEiL5CxJ10uFLgAAzC7j%2FzABjqkAdMBdlXgIIHm9v4vJZLp7iIERWnjEFtmBcW864kZrMOFY5SaqIzpsvbCM8er36KfQI2MWxopzXs0dn0VC%2FU6mn86GP0KQpOnuwb%2BA1hQjBMsxqyeTn2X9N7OGu1go6uOz6TkTp3i8Ne%2BevlKrAcF%2FQ24qawSgZdGKCqGZ%2BUKNDoUhweqiTPF119b7K8mMBP2SvwwfKDRE%2FQQHzCc2e5F6BEYOIiV&X-Amz-Signature=42aa4173091aded2c72968e2c24201aa45f99389d94dc31b60a86948b5e58bb5&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

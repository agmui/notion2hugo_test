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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYAN5T2R%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T004515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGBR5240NA%2BW4w8dRVQ%2BkMtqXijC84ZBGZJN8bXVfZxNAiEAtiZTaxjMF240gn9CDc%2BG8YZMBmMol0ZZvKKUl3gaqV8qiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOg7ZJOnp2fi1nmPhSrcAyeGo1aU2C0JzyfZqYqL0AqdU%2BFkmO8kJ55IqkhraAtaKpT67aGsLryd%2BWox7XQ8ijTeTCwkZRCsyx6h4a0WQ2yTvxss9vVdg99UePtwOr6JcISjYWJMP7G3L1eEatOry%2FWUqptQCg%2B2CjeQ6hIs9wXoiGYhEq%2BejoVka%2F6Bnr8rBeV83PUnt509f5i45XilKeZHy3TE1iZJrj33KlhJ2So4cL0nUtdKoAy%2F7ZSOwoMcKwv0GyTOgxhZ%2FLS5cV7xGbS1H4VCsHbDoSv94%2B%2Bhp%2B71jjJE7QMnbvIK9Rm3XIh29lFAwbiB0j7ub1cVnbFJbn6MMqVE03QcatWjucoC%2FY7XXRoJV7HvU77VY%2BKvdYXEhGtPDTWevf8YfQ%2BvgTn%2BsY32Ko9D5oMltnRK2%2F7zOGJkfpEo5wbOxUHbgnEmQd%2BoGK57JETQQ6gSShwZSVpaLc%2BGqcoQq1ZKe7oHrH%2B8P0RupsotConwarOxi%2FzppZZJ7ljHcE45xagGgBm6gxZH6A6XGRvQ2hcvBQc8zifyvP0VBkdldZPsu6PA%2BUCAWCw3%2FuFiauj3OSZ2rzvUm6TRnNldVpE2TYQPsYBnYHss%2BKeGtWd792AUH78DQWXeINylsqkwXGuqG2mLQe%2FbMKaimMIGOqUBknhOO%2F%2B0wB4ozlUsV0ExWphAgStc9VOn69swy5Jqi1jYIYaP7yNGRkxH3jkkRQa4H51Wr9wr3Dlswx0YpSoaFerpmTpfVpRCPgxgsNXXAl4mwqOBclqtGrWbUCl4JaJtaJmu1o5%2B0LWFsZYaisLTCYXvEDgG7h%2Fp1LicDI3FvU5h5JO3YKBunMtRQ4VbXz3e6jYstIiOpseQS3wsAJl%2BjY%2FS3E9B&X-Amz-Signature=bd0899504a52aa4ee391e5ee704f685c0f440d94e2122955836a23426024fe10&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

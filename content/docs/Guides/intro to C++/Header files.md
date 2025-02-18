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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q42VTS3O%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T040943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIFolPn7u%2FxeWf%2Biva0Urk07AH%2B9MLAUhPbsBlZMCKgbDAiEA9sTio8N5EMQmM5LX8mhdFdfcFkIpS4V5p8THi5xfm74qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBl%2BHDMmibxHb%2BzyTSrcA1jEyizHFykpPbeH6kMgyX6i415SLmKUkmzec0f7zG1Ds%2BQCcsceaSgEAz6v3n1a8yguVHsbX7IIs8vpfD5wXb2ocilXDkXscT%2B2WMRiUuwFHDKPDt%2BlGEFlseEHVGCPf%2BiJV23JHr%2Bug5vMbvUmO9fZYGE3ThrksIQIHNzqjD%2FJVyxRyZFLlvT7gbaatKD2QG8VUesN%2FqMuN4NycOKorlaAI25tAuzFFczre0V9IJ4IpvQyCpbD3vhQVcY%2FTplST23AGNgZDvQbwqhU6pewFzyqBalWGT6520W8xg8TlqcsFBF7LNxQfKS%2BHt1w9ZnZISY8%2FBgTnnvRm%2Fv7ARAqU9%2FgdHbQHVjGauSi%2FUTQf%2FLEyCt57YO%2B5yfGRHwLCCD8C1Ry4i7Gw83G6icj9GtfdinMRmcXTdocrmUJwI%2BYiVuUJDseHKr%2F8CJH%2F8im5DQCl1AZo%2FAVrYdqstsCkSfCFNqGBN9A2GvIUH2wh%2BD06PAszVeFDOj9AD52hnyAbvV9TqKvBM5XoV4clOYal%2FPwjtPQ1Y9opUvayP8ba22CgP6Wkc20FIdWCK3tWrKu7tUWFNLKtDI1KPp6fcyXx2x2FkMAvEXxVljHCS%2F6HK8YKHIIbhm8Jd3jRipGwOo1ML%2BM0L0GOqUBWQz0knWSTzDQVjH2GK8NPeN9Y0owFWrbdVq7QYcX%2BA3b7N14SmzMgR4B2Jg5vznSEbfY6q9L8kuSd3pXGiMToH1LhNag%2Fg2Yiq4vgTF3epOiR6%2Fx7b2Eow2oNoLtNNtwgJM245spLdlXjYlc3EB7t8CgYQgCGr8BglZQVCj73sC5htUzYjPq5LP0VFrU6k4GdLnzt3Nq%2BG7OdgPaxK%2FQD6T1VShl&X-Amz-Signature=6a11b9046222d13dc3fb2207c452aca0e64683d110cdf7fceab1ffadd58fb48d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

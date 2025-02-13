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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635CWVFYI%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T040944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWocCCrUNhcS02HGi%2FrmFZZS8uz01X1sydVV4Fh5%2FE1AIhAI1HZdBvB%2BbBnGnNS8N7UoFUcVX9Q7E32b8V56P4%2B5TPKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzbnN93f7S5m4PHgGoq3APkAXqLK1182cyiQK4XhvOzwS4DnRTS5uWg2F%2Bn0FUxQ9Z2SrSQT3XVhaIh1gu29Wf1cU2GaAetKOJqe%2Fs%2F2FzYZV1c8BKAkmYYtqIVewACUw8X0IPF%2FGHjY65WuzD3G98ajcBCff%2FzGnoQ9FnhyHhYOeMOivN12yqFRQvaViQ6rs2KkaJe0cJeSR4r7tBYzR1GrTEZn2FpjddbgIHQP7pJo5EuWtaqsXaLeCkCV7Y10%2BJYC51JuxYUpvAsiM2pVWHcvVjEOmI9XX%2BtEgHRAqqcgQbFTKrm67JVL9sv7Tv9R1Yc3ehwR9OB8PK4FRQffZ6SRLWycuuHTfSTECE8PKxeA%2BixwoGgzrxa1WmyyMJV6JV9xSOQ3%2FfYqt3li0p9DDHVAoRsQnorzAUpmv0Onr%2B%2FqesKnal4UMkZd3a%2FdwObgkBGp7bX5aSjmFoTGlVNFxYQs2mcr5Y976pKrhv3H76a0phITuAJmFIdAHbu10IRbHKfuPD284cOeOWNcQkGxPsBiBR%2FwwttfA5x0gFi2K1oCFKB8OmfOAtDUau%2BZCY7FgLDs3rb2%2B5y4X6jCglrADF6iNbT9JQwqFYnOE1OTYvSFj2LUV0fax5zULVFjfoXY%2BkwutWu64blbtqSHTC9mLW9BjqkATp9rKNModDPEQZQrcP1xORUjE5a2dq2AdvHEnWmmXj22EWRRHghTIf0Fj%2ByOp6VLO%2Fpt4l53ABCX7yagz%2B84REShTCk7uwO8yra9S2h8XRSUTKQZSU5aREsUr4N0s8mFTpTOVVbhzcZb%2Br9VdU5WvffdwARkjPJG8gCj9AUfTEfvPHjw0vIh9HQypOW7UkUoFLsr3oydBAkfTHTrZ7PRX%2FjuHZ7&X-Amz-Signature=bff65efe7e850747ffef680e929628a74d0282804138253d262c3e4ec23c72d3&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

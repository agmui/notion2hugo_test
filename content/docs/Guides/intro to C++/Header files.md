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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT3XZZJ7%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T121637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQC9fSdKjx4CfqbSOgmUNdyv6cXyiWvqnz%2Bnt%2FhdgJ77AgIgPqvmQv6rWLvC%2BbnbKsk14VtjxymaQ%2FsmhvAHDc6%2B4H8q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDA5SKoHxNkNjRViKTSrcA%2BitnG1dSGQxzVrf5nrjMkM%2BwHMiY%2BTBtFYNnOULjWZcyT5TIdZUKyHfTrzoBcb7SQ42ZktqFrmcoSP8b2tS%2F%2Bz3GcX1XnFwSLMd5%2FJamCynjq4Mmbp6MCmseT3R%2FWZweskWj560c%2Fq83YERoRSc0l9lC%2F%2F%2FkfRYSGbP7ZVFHDbQ8Xx6SxpJT9%2BFSjIkTMDUmdnDsNYvyA%2FUn0nqZ6xw%2BYFBpgAKwphQJv3Feui%2B703DJV2w17urhtPBjw6VitsUBoQvfyW7%2Bktp10PwxNwUCmn01P%2FX3f7HOLcS3yttJUXFzjHxs9YrPmii6kHNjQYdsjSk%2BF%2By2PfpPkW03Zd8dvTcC51gGI12K4BE%2BE1e1PPjICDIu1Sbkm8vBze4tRMhDCJzAb2jKOWeLy9Gmq3aax8OHRTlKYFCd3Zzg3myY6UGj7b%2BblVtl5KZkLuDHJ236p7C%2FGb8O2ahgs7JgOKa%2FfoyOu8PajoJNFufx0xcgY%2BPZR%2BCsU%2FUsbDJNBRZqOni3a0vHTjyJ38480oFCbU72fX7xDCwK%2FB%2BRre3pMc6HdKehitVRqk1d9ZWYYiEkCZ8QdN5X6QbTJ%2BiYKkEy4dkfPka71xkZPWy3xl%2BlRDfTe9MIw%2Fld%2Fign6qHYQmlMJGNhsIGOqUBNGs%2B99GwDqG9bp2uNkEpE8bT23i%2F%2BfillTW8jf5gLwkR%2BWfsuuyV3FO9Zl5FRMnOzstRQfDGX1OeVEYFihL56DpdI8S10BlCXztMG4L0%2BUo9xjnAh3iajAZoa4GZgJZHVLQeU9Ah4gdjXMx2zsxwj8t8TDIOVyoCdC6192rfeAtt%2FL5F8lKlTSZHtFWh86FCUQR8fhnoDI2tsDxJ6%2BeLeqH%2BcVlG&X-Amz-Signature=5287011a40c0cdb1f94999dd89278f73b5a0f900f17c0f65948b77862c911952&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

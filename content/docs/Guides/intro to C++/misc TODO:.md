---
sys:
  pageId: "cbb61f02-1c1c-48b6-9015-9a3b096c1017"
  createdTime: "2024-06-25T02:33:00.000Z"
  lastEditedTime: "2024-09-30T17:08:00.000Z"
  propFilepath: "docs/Guides/intro to C++/misc TODO:.md"
title: "misc TODO:"
date: "2024-09-30T17:08:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 120
toc: false
icon: ""
---

### static_casts/ reinterpret_cast TODO:

 [https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/](https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/)

### [Literals](https://www.learncpp.com/cpp-tutorial/literals/)

```cpp
#include <iostream>

int main(){
    std::cout << 5 << '\n';  // 5 (no suffix) is type int (by default)
    std::cout << 5L << '\n'; // 5L is type long
    std::cout << 5u << '\n'; // 5u is type unsigned int
    
    // basically the same as
    int a = 5;          // ok: types match
    unsigned int b = 6; // ok: compiler will convert int value 6 to unsigned int value 6
    long c = 7;         // ok: compiler will convert int value 7 to long value 7
}
```

{{< table "table-striped table-hover table-responsive" >}}

| **Data type**  | **Suffix**                             | **Meaning**                               |
| -------------- | -------------------------------------- | ----------------------------------------- |
| integral       | u or U                                 | unsigned int                              |
| integral       | l or L                                 | long                                      |
| integral       | ul, uL, Ul, UL, lu, lU, Lu, LU         | unsigned long                             |
| integral       | ll or LL                               | long long                                 |
| integral       | ull, uLL, Ull, ULL, llu, llU, LLu, LLU | unsigned long long                        |
| integral       | z or Z                                 | The signed version of std::size_t (C++23) |
| integral       | uz, uZ, Uz, UZ, zu, zU, Zu, ZU         | std::size_t (C++23)                       |
| floating point | f or F                                 | float                                     |
| floating point | l or L                                 | long double                               |
| string         | s                                      | std::string                               |
| string         | sv                                     | std::string_view                          |

{{< /table >}}

### Const

- `const`
- `constexpr`
- `#define`

### [Enums](https://www.programiz.com/cpp-programming/enumeration)

```cpp
enum season { 
	spring,
	summer,
	autumn,
	winter
};
```

### compiler flags (`#ifdef`)

before compiling we can have some options for what code we want

For example, we can have code only for tests, simulations, or hardware

this is done through `#ifdef`

In Taproot the options are listed here

{{< table "table-striped table-hover table-responsive" >}}

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

{{< /table >}}

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7FVVF5T%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXNqXy8fcmWYuAm4iG9RKkebuxb19EFhthfqxhjyihzwIger5OlmWe6wT7MCiaB3GAyoZEbL86pgln1Z4KT07m%2B38q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDOwwW%2BvtVWLxwctTXircA5Iyzrg6DFq4khJQAvW1tXFKV2yrRIFwBnAphpJ5tCI1Uei02kcSuZ9AupZBllmMEFuV1elkRzCKF0Q6ffxCtmVJc16uwjdoQqnkGmfXZqzTBFa3i2YwvFKdMR%2FobxiQ5w142xi16iCEawaA808T6K2GIKzoRZSDN%2BTlMJ1mlDpJ3%2FFXT4ZOcFo7%2FO5UistXYlWVUMEvlGSguMbEvxUmJIh2IgOFJbovaDU%2FOeRdL3Qbi3XTTuUVfuhzeyQbw%2BegUrB7raUs3Z9NLrXKoVLq3rNIaALi4SPs3WkJenmAQsarUlc00XsllddRJf53W%2Bi6a0goz%2FrMxYvBKgXTVvaCaaKJN2Wz5hGyCap7XNfHy2qrIrjffBBkrVxnZ7DMduIJS63UxwV7Bst2gCquSKnQ2dPSEpAg5JQn5JD%2FKebmbrBXKOCj%2FpN17eeipX2RkuL7HfAcrU2Lx%2BfQNxx9nrjSVGAs%2F7FRq8K4w%2BHm7PTJxqXlnWSUpZPOw40TZkkGVOX6CGXn13NnjuPyyXQ6%2FroHDyjRrojBJATmLTq3Ujang%2B18KVmNftmRFh4NWyuLB5iMC8FXen2elHeFGZ5czSTfDKanGbk96T3bCa%2FXB7O1sS%2BBS4yxF8vZLx198IeKMLjwtsQGOqUBW57mkav4R81yMino4UAI2U06luMxg6yzY9zIIRmoODe8e1KaULnEQn8pzwY%2Fnd5irSV5I0xbbTQ2nYTHMpTNeuPh6kBa5qErLepDoNLrkTogJ6AY3SV7S5k2NtsIKptPE29DsoKuBjXlwHzPJfNv6Tjb6idcmTR82KA4lLzZDu5SPo%2B5PFl7yXT%2FZyX7fDzqWNmbz1jgcFL1iFkdoUUngSjIJKLL&X-Amz-Signature=ba76a0e5720b37a80db9ba37e52912254c5d71e839b5cea46be83f1854da5af9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7FVVF5T%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXNqXy8fcmWYuAm4iG9RKkebuxb19EFhthfqxhjyihzwIger5OlmWe6wT7MCiaB3GAyoZEbL86pgln1Z4KT07m%2B38q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDOwwW%2BvtVWLxwctTXircA5Iyzrg6DFq4khJQAvW1tXFKV2yrRIFwBnAphpJ5tCI1Uei02kcSuZ9AupZBllmMEFuV1elkRzCKF0Q6ffxCtmVJc16uwjdoQqnkGmfXZqzTBFa3i2YwvFKdMR%2FobxiQ5w142xi16iCEawaA808T6K2GIKzoRZSDN%2BTlMJ1mlDpJ3%2FFXT4ZOcFo7%2FO5UistXYlWVUMEvlGSguMbEvxUmJIh2IgOFJbovaDU%2FOeRdL3Qbi3XTTuUVfuhzeyQbw%2BegUrB7raUs3Z9NLrXKoVLq3rNIaALi4SPs3WkJenmAQsarUlc00XsllddRJf53W%2Bi6a0goz%2FrMxYvBKgXTVvaCaaKJN2Wz5hGyCap7XNfHy2qrIrjffBBkrVxnZ7DMduIJS63UxwV7Bst2gCquSKnQ2dPSEpAg5JQn5JD%2FKebmbrBXKOCj%2FpN17eeipX2RkuL7HfAcrU2Lx%2BfQNxx9nrjSVGAs%2F7FRq8K4w%2BHm7PTJxqXlnWSUpZPOw40TZkkGVOX6CGXn13NnjuPyyXQ6%2FroHDyjRrojBJATmLTq3Ujang%2B18KVmNftmRFh4NWyuLB5iMC8FXen2elHeFGZ5czSTfDKanGbk96T3bCa%2FXB7O1sS%2BBS4yxF8vZLx198IeKMLjwtsQGOqUBW57mkav4R81yMino4UAI2U06luMxg6yzY9zIIRmoODe8e1KaULnEQn8pzwY%2Fnd5irSV5I0xbbTQ2nYTHMpTNeuPh6kBa5qErLepDoNLrkTogJ6AY3SV7S5k2NtsIKptPE29DsoKuBjXlwHzPJfNv6Tjb6idcmTR82KA4lLzZDu5SPo%2B5PFl7yXT%2FZyX7fDzqWNmbz1jgcFL1iFkdoUUngSjIJKLL&X-Amz-Signature=f8effa1832019e80000c9ee71c8aad4b7be0e7fc1517d2dc0bdc2ca9335119ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## c++ practice

Using everything you learned try to do these:

- simple ArrayList class (try adding these features one by one)
	- class field should have: size, capacity
	- should use a template and namespace
	- Default size `#define size 4`
	- Constructor should either take an list with values,
	 or nothing and just create an empty array of default size.
	- methods:
		- constructor/deconstructor
		- `get(int index)`
		- `edit(int index, T val)`
		- `double()` doubles the array
		- `append(T val)`
		- `print()`
	- If you want more you can write sample classes for stacks, queues, trees, etc.

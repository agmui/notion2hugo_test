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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LJYOARR%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T140713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCCR3wtwZhxjJD%2FxpcJ4P7ut7eDvyaMA7RLsztZL0ZcjgIhALfKH4%2FiqkgBrt9usQ27u7PyxTeIajksoPvZWGuQsShmKv8DCF0QABoMNjM3NDIzMTgzODA1IgynC17lQbUrv24ub1Yq3ANXfi7SJPAOXu5q6Cs0JLcGpKhrdRvQ31P1ydiHeiMJZWwrcpOeifXjHRMja2ONFz7AM6DV2Y0hfWiYt%2F41cYNqqdQuok%2BKcV6ijHN3OSyZ1nGmzQBCUgofD5JfHkssB%2FYHdN0y%2FzReUMRmqMKsVXuohGrTYuDN7gMKfbGGsHWzDe3cI5Dw28kQAc9t4Nu%2FaQBorA%2BWgQLIgpUDOSCCGMqIiYHP4g1Z68Yoa9PLB1USw%2BUENZLic8RXQejumGg6MYsJOflVZA7TsRVE4s1tkl%2B13ZomgfJAxBCC9D5fcuvjNejoDDPeEyd9hezNOSdpRdBSfpaQPfsoeYoIVV9a9Pwraw8Si68kt2WNfP%2BJg7VWJT9GRCE90PD4tVf9G7cmf2WOpHiW1rqYYNDPqOe14ZT2WNKw0tNa2TxTXsJ3rMGKVXIsLEAGmJP7Gl2cmihOf96omCVSnQ%2FCAzWMaBDvOk2m3NNQzdaTwSxIfUS5zAsBHh%2FJQFgMc7PPfs9Ba50p7vCso%2Fd0eGFuux3Lz34eH1j%2BOZl2WK14i7G2ToY4yWvsMjDWyMqF2JBpzikXqg3FiDx4nr%2BnVoejw6uyNqj0JyKVZdZQ66s0bqvJ7SVfyovIxTCItnpz6Ei%2FUplRwjCBz6nDBjqkASi9tNRsecYCRHUcj00mNNJCX8OrrIn2TdWWm3JF8JXF51d0YYKV3GKZI4quJKjdpcdungBNtDrfLYAoBqgsidyo6VcRBmZkMrUlMiUdQXLpUVWG54HV9KFCTQ1fXQTTh0GGzY3pqGcGseTvhARTXzUD9MI%2BsSABR3I5uf5zlwKbIHjE85Z2o4bKpQZIhySmMSiuSz%2BFOybExTP9RcgFwwtysVOS&X-Amz-Signature=fdcaa018fd4381c189a77d8e0690596e48d94fc745c3fed3ecf6b8560512b660&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LJYOARR%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T140713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCCR3wtwZhxjJD%2FxpcJ4P7ut7eDvyaMA7RLsztZL0ZcjgIhALfKH4%2FiqkgBrt9usQ27u7PyxTeIajksoPvZWGuQsShmKv8DCF0QABoMNjM3NDIzMTgzODA1IgynC17lQbUrv24ub1Yq3ANXfi7SJPAOXu5q6Cs0JLcGpKhrdRvQ31P1ydiHeiMJZWwrcpOeifXjHRMja2ONFz7AM6DV2Y0hfWiYt%2F41cYNqqdQuok%2BKcV6ijHN3OSyZ1nGmzQBCUgofD5JfHkssB%2FYHdN0y%2FzReUMRmqMKsVXuohGrTYuDN7gMKfbGGsHWzDe3cI5Dw28kQAc9t4Nu%2FaQBorA%2BWgQLIgpUDOSCCGMqIiYHP4g1Z68Yoa9PLB1USw%2BUENZLic8RXQejumGg6MYsJOflVZA7TsRVE4s1tkl%2B13ZomgfJAxBCC9D5fcuvjNejoDDPeEyd9hezNOSdpRdBSfpaQPfsoeYoIVV9a9Pwraw8Si68kt2WNfP%2BJg7VWJT9GRCE90PD4tVf9G7cmf2WOpHiW1rqYYNDPqOe14ZT2WNKw0tNa2TxTXsJ3rMGKVXIsLEAGmJP7Gl2cmihOf96omCVSnQ%2FCAzWMaBDvOk2m3NNQzdaTwSxIfUS5zAsBHh%2FJQFgMc7PPfs9Ba50p7vCso%2Fd0eGFuux3Lz34eH1j%2BOZl2WK14i7G2ToY4yWvsMjDWyMqF2JBpzikXqg3FiDx4nr%2BnVoejw6uyNqj0JyKVZdZQ66s0bqvJ7SVfyovIxTCItnpz6Ei%2FUplRwjCBz6nDBjqkASi9tNRsecYCRHUcj00mNNJCX8OrrIn2TdWWm3JF8JXF51d0YYKV3GKZI4quJKjdpcdungBNtDrfLYAoBqgsidyo6VcRBmZkMrUlMiUdQXLpUVWG54HV9KFCTQ1fXQTTh0GGzY3pqGcGseTvhARTXzUD9MI%2BsSABR3I5uf5zlwKbIHjE85Z2o4bKpQZIhySmMSiuSz%2BFOybExTP9RcgFwwtysVOS&X-Amz-Signature=9e3719c0678e9c3532e04f4e19838186fe7bb18c5fda165d7856b1d1c6cdf89b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

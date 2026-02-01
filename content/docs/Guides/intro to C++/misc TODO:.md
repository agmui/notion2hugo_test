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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E5X53HM%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICT9aeLbdEU7%2BLhBa5U14PS6SHuuLwyXy2Q77qrqye3dAiEAqLwLZTxdfd5E9G7K%2BEVSjkwa4vFIKvZ3He72kOLBDzgqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJMnQd6K9bHwQtUMmCrcA%2BZZDyro1t4K%2BN1LRjPWmt8dDnJrENJ8UVraePp0OjrHtvfa14KPwHhyCTH5NDiflvb0ZvCFItUhjRcThVro2sj2wXJt1Hlnoo7g2x4iY5Jb%2FpW%2FfHEM3p4fmHN7SDNmrB1z3abCbm5R4CXyeXowMYFBF6kal8y9Nhq0bjrdoY%2FEf2YzlDdUF4sXWfanrk5bxnMO1g6XnD7smLFrF9MHvOegqSucvpVHsQuTW1t6G9RPqhZm3UpVz%2BVKJLIhvkKwSzBrdzU5pG7UWID1t%2FHQllM%2FgYplUXZ7docyxaN%2BcpQihg4nwH%2BC7dGERNm6d1qGff9SfucdG5sONy%2FkPyRkoAloKOt72KMJnqjbslS8qMkY4BGSYUYxkssWp08QlixYxDtYYqcwqKVS6q3PENwl%2Bibu9bb95QDCbkhEmHCNvJlYhWLgdiBZSDAVLl0cqijKIunvQTJ%2BGoo%2FCHhwwsD91N97sOfcT%2FJkfCqyyIYyjYx6I%2B%2BNZqz%2FACW%2FjPs9Mp50EfK7Y7WcQ%2FmYj3zo2%2BWk0RYU7oWWL9if3lodu7yfRe6Yu8WNd7hepusn5rJwgB31bbg2GXAB5g4pD7kuNdALAoxleuJaPhXGTbk7pLn0kyV%2BS4jqh6wrWVMTosh6MJTy%2BcsGOqUBTRNHQfwW3z95Xv%2BHKNzgm1RI3vsQxNP4jj7jHm2q65wG64S2wrrKN%2F6U2d9TdpW5CUqT3fbfqtDYwjFoB9B05dxWgzaiWZCowuwX%2Bsk9y2CP0Ivsjx5NQtcEJbCwm8nS%2FcaIxLETcIjM6nvIptFbrJldMcvrQLIKZWdFWTcYOoEqHf8v2XIMISNDql1aVo4FPx2i89qyTFEHiFA%2BlmOHvvm%2FCyUC&X-Amz-Signature=9f1a97bf764e89e8b570e20bca93167b255e1d5cc9af6cc2e96ce9b988c98fd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E5X53HM%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICT9aeLbdEU7%2BLhBa5U14PS6SHuuLwyXy2Q77qrqye3dAiEAqLwLZTxdfd5E9G7K%2BEVSjkwa4vFIKvZ3He72kOLBDzgqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJMnQd6K9bHwQtUMmCrcA%2BZZDyro1t4K%2BN1LRjPWmt8dDnJrENJ8UVraePp0OjrHtvfa14KPwHhyCTH5NDiflvb0ZvCFItUhjRcThVro2sj2wXJt1Hlnoo7g2x4iY5Jb%2FpW%2FfHEM3p4fmHN7SDNmrB1z3abCbm5R4CXyeXowMYFBF6kal8y9Nhq0bjrdoY%2FEf2YzlDdUF4sXWfanrk5bxnMO1g6XnD7smLFrF9MHvOegqSucvpVHsQuTW1t6G9RPqhZm3UpVz%2BVKJLIhvkKwSzBrdzU5pG7UWID1t%2FHQllM%2FgYplUXZ7docyxaN%2BcpQihg4nwH%2BC7dGERNm6d1qGff9SfucdG5sONy%2FkPyRkoAloKOt72KMJnqjbslS8qMkY4BGSYUYxkssWp08QlixYxDtYYqcwqKVS6q3PENwl%2Bibu9bb95QDCbkhEmHCNvJlYhWLgdiBZSDAVLl0cqijKIunvQTJ%2BGoo%2FCHhwwsD91N97sOfcT%2FJkfCqyyIYyjYx6I%2B%2BNZqz%2FACW%2FjPs9Mp50EfK7Y7WcQ%2FmYj3zo2%2BWk0RYU7oWWL9if3lodu7yfRe6Yu8WNd7hepusn5rJwgB31bbg2GXAB5g4pD7kuNdALAoxleuJaPhXGTbk7pLn0kyV%2BS4jqh6wrWVMTosh6MJTy%2BcsGOqUBTRNHQfwW3z95Xv%2BHKNzgm1RI3vsQxNP4jj7jHm2q65wG64S2wrrKN%2F6U2d9TdpW5CUqT3fbfqtDYwjFoB9B05dxWgzaiWZCowuwX%2Bsk9y2CP0Ivsjx5NQtcEJbCwm8nS%2FcaIxLETcIjM6nvIptFbrJldMcvrQLIKZWdFWTcYOoEqHf8v2XIMISNDql1aVo4FPx2i89qyTFEHiFA%2BlmOHvvm%2FCyUC&X-Amz-Signature=19430fa6d57ab37eed088966b0ad06ed73c0de7519757ef17539162291477af2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

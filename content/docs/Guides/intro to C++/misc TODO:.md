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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWI3YMCM%2F20250722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250722T004524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFUwsOn37%2BB1Tp2uCyjSX37PJ0LOt2xtFI%2B2cGwvoU5UAiEAtsp3lGtCa%2FwYTi85pN3QtUOZGEGuFlWv2HGBFqycPZ4qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIEnzUmSsiaEFBRbWCrcA0NjLU6P9c3Ry%2FjlB59X19eXkF6ec%2BR%2BSF1GLt9dqN8HIV6iT0G3TD9Wb76vS6jna3EHam%2BmRJrhB4yEPUEHFrZ89LXCYKYEsaAoUVVo9136VDXPErTnST5fJ%2Bvn7vijeyxKbYmsCDVCUGb5YvP%2B6tas1pD6KXXaCJPD9z8LCJVwU4vJdmepa%2B5J6Sws4vgidNavpjPhDvmCoWm%2FDYL5C0lAKHzXnCUC5lHtvUnXQ5qzhmzFciEUesFexmwXfNv9q574JaWtvaZRs9W0S3dclxaccO3dGighW5pFQVMZVyznGhrag5eq2DPAlosSnSIraPliGHlGyYWh%2Fg9mEqLCSaWMkcO0kgBFLYbwUSPkdCTaI0d9p%2B5v2y9LMpcVBN%2BEg1s07b%2FSApi0%2BCF%2BspCR2KgUEN7Ewn%2FastuV0E3AW0q%2Fp57hZtBgKJwKIcBkkxwSCRJ9R9IAiBC85J7s65%2F%2BY2MpqeYY0FRyN1RNY9vERQg2C%2BGq2oYFBz7emcKInejI3Xsh8idwDnCj0pDzUnaeN6DDVlWefDZUqQhnkrIZ4yUj957gEwCG%2FDIw9heizeRvj390%2FeLIkWXrNqnRRVeYRnQAzL6sE9x4veS%2F4fouZmPysqQ%2FHNnSKicg%2B9IPMI%2Bf%2B8MGOqUBJHJndo6RrH3zOXhtO1bLklxmVcMtZajhAAgheRw0rPd29aZzmcwH2v%2BManwSvVUSAgHgZNTv%2FccbS5l3sJ17FC8maaeoXpD3jljwBn%2Fc3roIM77qJR%2F%2B2VEZ7Hv2WWgR54zaT0EqS3V964D4Jac80FN%2FRFKwfcV6t3SjLu5CaHz6%2F59l2Qh5dg%2FsMvzz7DtMSI6HIuQydD7jRiGhA4gB59n1PKdL&X-Amz-Signature=9206c40f42fe94d9722ad5984ae62bb6d2d685e83d6d9ee4ff11627ebea9cee3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWI3YMCM%2F20250722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250722T004524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFUwsOn37%2BB1Tp2uCyjSX37PJ0LOt2xtFI%2B2cGwvoU5UAiEAtsp3lGtCa%2FwYTi85pN3QtUOZGEGuFlWv2HGBFqycPZ4qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIEnzUmSsiaEFBRbWCrcA0NjLU6P9c3Ry%2FjlB59X19eXkF6ec%2BR%2BSF1GLt9dqN8HIV6iT0G3TD9Wb76vS6jna3EHam%2BmRJrhB4yEPUEHFrZ89LXCYKYEsaAoUVVo9136VDXPErTnST5fJ%2Bvn7vijeyxKbYmsCDVCUGb5YvP%2B6tas1pD6KXXaCJPD9z8LCJVwU4vJdmepa%2B5J6Sws4vgidNavpjPhDvmCoWm%2FDYL5C0lAKHzXnCUC5lHtvUnXQ5qzhmzFciEUesFexmwXfNv9q574JaWtvaZRs9W0S3dclxaccO3dGighW5pFQVMZVyznGhrag5eq2DPAlosSnSIraPliGHlGyYWh%2Fg9mEqLCSaWMkcO0kgBFLYbwUSPkdCTaI0d9p%2B5v2y9LMpcVBN%2BEg1s07b%2FSApi0%2BCF%2BspCR2KgUEN7Ewn%2FastuV0E3AW0q%2Fp57hZtBgKJwKIcBkkxwSCRJ9R9IAiBC85J7s65%2F%2BY2MpqeYY0FRyN1RNY9vERQg2C%2BGq2oYFBz7emcKInejI3Xsh8idwDnCj0pDzUnaeN6DDVlWefDZUqQhnkrIZ4yUj957gEwCG%2FDIw9heizeRvj390%2FeLIkWXrNqnRRVeYRnQAzL6sE9x4veS%2F4fouZmPysqQ%2FHNnSKicg%2B9IPMI%2Bf%2B8MGOqUBJHJndo6RrH3zOXhtO1bLklxmVcMtZajhAAgheRw0rPd29aZzmcwH2v%2BManwSvVUSAgHgZNTv%2FccbS5l3sJ17FC8maaeoXpD3jljwBn%2Fc3roIM77qJR%2F%2B2VEZ7Hv2WWgR54zaT0EqS3V964D4Jac80FN%2FRFKwfcV6t3SjLu5CaHz6%2F59l2Qh5dg%2FsMvzz7DtMSI6HIuQydD7jRiGhA4gB59n1PKdL&X-Amz-Signature=84807ab1e499951a488aa040ef19e66fa77978d11d9f1c16cb777311f938ceef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

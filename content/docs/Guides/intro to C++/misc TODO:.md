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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TL2DRHC%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T170701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICVgjFt74J7OGun8HMPPu%2F%2F5EG2ODNWhVH1iz%2FW2UsF2AiAZu4gbJzo3Dq1RDOgxqN8qE9Bpmw%2BT3WzbdnHIjtzJzyqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlBf7KttksiMY1s35KtwDeYXcLxxydiWWZPb1H6BzZLtjTtnNLMSWQcGXQVJihiNsyUvnFBqA9jrRthk83ptV4XndMxoTICWic1H9ldJudjGUtmD3foEPUpv4DJwubQnqMEAIX9tHsmZckKu1GvPg80u2cPPh0GsDAUFhNdNeM68m1b1qPtIkmAP2PLa6I%2FeOkLNpsAhxJ55u1zuuJfFgzbNOIs4vNj1ov0GsSxk8XCc3wd7h6%2FOcEKjKxdNaN5C6HSL4twFk%2BwPFigrq9iJa3pye3BHfsLigAlmaemqun%2BHH2SsQUTeHG%2BydnK7y8ICtNLDmUs9B5bwLZYSvXa5%2B%2FPQRKRRrYw0bmBbJ7WMc5dM3x1zUwFk%2Bu6Gh%2Btang71IIa8HSmylnrcC2fh1fuFSQOXmoYeyzy70ByuxPbdy1yRf8M71iJiavoJ2%2FWm5aHiK0TglWqu0c0EVAdc9nZl6mIXzIt6m878ZMgZqENuOMAMDEAY7nJrFMDAEF1gnzvvkjwPKFpIKbyospmwg9fAzR6Do3xzqMV3e4HcDB9%2Bh%2FCIpsO1yxhx%2FlwBEfZT4dxjbaMgEBUUvnRCO%2FN%2FHarVwsIPbZqIcIWh2kbkpf4hPoR%2B0n5xRYwFkcmPAr6wfGLYzt5mVRSPRkuvIuO4wlKLKwwY6pgH7pbMJ0p1XuMMn%2F7mDMcWMhUUYK5iI04sfJnOVaV2l3wsEa8RrbI3%2F5e8ofBMnHpNpVt2maIiHCwzqrQpWSZEcp7wu0RFMBRW1cyF2eC4KsfMma5kJUSLQTbWiRnvJA%2BKh60zohu%2BdzYNOTlyzfVpwJUJe6zEEPDtdx7FcGVZqVBYHOdOA6yX9OV%2BndZSc6FEaDv0r4J%2BIdjBE9zKrzFp1Eo2XavHE&X-Amz-Signature=b5e158d81dcd187d222b34c0b11a1fc9afb3c1be8daf72d0fbedfd279a25a47e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TL2DRHC%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T170701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICVgjFt74J7OGun8HMPPu%2F%2F5EG2ODNWhVH1iz%2FW2UsF2AiAZu4gbJzo3Dq1RDOgxqN8qE9Bpmw%2BT3WzbdnHIjtzJzyqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlBf7KttksiMY1s35KtwDeYXcLxxydiWWZPb1H6BzZLtjTtnNLMSWQcGXQVJihiNsyUvnFBqA9jrRthk83ptV4XndMxoTICWic1H9ldJudjGUtmD3foEPUpv4DJwubQnqMEAIX9tHsmZckKu1GvPg80u2cPPh0GsDAUFhNdNeM68m1b1qPtIkmAP2PLa6I%2FeOkLNpsAhxJ55u1zuuJfFgzbNOIs4vNj1ov0GsSxk8XCc3wd7h6%2FOcEKjKxdNaN5C6HSL4twFk%2BwPFigrq9iJa3pye3BHfsLigAlmaemqun%2BHH2SsQUTeHG%2BydnK7y8ICtNLDmUs9B5bwLZYSvXa5%2B%2FPQRKRRrYw0bmBbJ7WMc5dM3x1zUwFk%2Bu6Gh%2Btang71IIa8HSmylnrcC2fh1fuFSQOXmoYeyzy70ByuxPbdy1yRf8M71iJiavoJ2%2FWm5aHiK0TglWqu0c0EVAdc9nZl6mIXzIt6m878ZMgZqENuOMAMDEAY7nJrFMDAEF1gnzvvkjwPKFpIKbyospmwg9fAzR6Do3xzqMV3e4HcDB9%2Bh%2FCIpsO1yxhx%2FlwBEfZT4dxjbaMgEBUUvnRCO%2FN%2FHarVwsIPbZqIcIWh2kbkpf4hPoR%2B0n5xRYwFkcmPAr6wfGLYzt5mVRSPRkuvIuO4wlKLKwwY6pgH7pbMJ0p1XuMMn%2F7mDMcWMhUUYK5iI04sfJnOVaV2l3wsEa8RrbI3%2F5e8ofBMnHpNpVt2maIiHCwzqrQpWSZEcp7wu0RFMBRW1cyF2eC4KsfMma5kJUSLQTbWiRnvJA%2BKh60zohu%2BdzYNOTlyzfVpwJUJe6zEEPDtdx7FcGVZqVBYHOdOA6yX9OV%2BndZSc6FEaDv0r4J%2BIdjBE9zKrzFp1Eo2XavHE&X-Amz-Signature=f238dd6653bd8fc270ed2311fd68419d2afeb1073e6ac119ecad8c02254b2584&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
